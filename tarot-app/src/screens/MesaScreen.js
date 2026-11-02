import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import TarotCard from '../components/TarotCard';
import MesaToolbar from '../components/MesaToolbar';
import CardInterpretation from '../components/CardInterpretation';
import AIReadingModal from '../components/AIReadingModal';
import { useTarotGame } from '../hooks/useTarotGame';
import { useAIOracle } from '../hooks/useAIOracle';

export default function MesaScreen() {
  const {
    spreadKey,
    selectSpread,
    currentSpread,
    question,
    setQuestion,
    allowReversed,
    setAllowReversed,
    drawnCards,
    selectedIndex,
    setSelectedIndex,
    selectedCard,
    handleDraw,
    handleRevealCard,
    handleRevealAll,
    saveToJournal
  } = useTarotGame();

  const {
    loadingAI,
    aiReadingText,
    showAiModal,
    consultAI,
    closeModal
  } = useAIOracle();

  const handleConsultAI = () => {
    if (drawnCards.length === 0) {
      Alert.alert('Tire as cartas primeiro', 'Toque em "Tirar Cartas" antes de consultar o oráculo.');
      return;
    }

    // Auto-revelar cartas caso alguma ainda esteja virada
    handleRevealAll();

    consultAI({
      question: question.trim(),
      spreadName: currentSpread.name,
      cards: drawnCards.map(c => ({ ...c, isRevealed: true }))
    });
  };

  const handleSaveJournalAction = async (customAiText = null) => {
    const success = await saveToJournal(customAiText);
    if (success) {
      Alert.alert('Salvo no Diário! ✨', 'Sua tiragem oracular foi registrada com sucesso.');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* 1. Barra de Ferramentas e Configuração */}
      <MesaToolbar
        spreadKey={spreadKey}
        onSelectSpread={selectSpread}
        question={question}
        onChangeQuestion={setQuestion}
        allowReversed={allowReversed}
        onToggleReversed={setAllowReversed}
        hasDrawn={drawnCards.length > 0}
        onDraw={handleDraw}
        onRevealAll={handleRevealAll}
        onConsultAI={handleConsultAI}
      />

      {/* 2. Banner de Intenção Ativa */}
      {question.trim().length > 0 && drawnCards.length > 0 && (
        <View style={styles.questionBox}>
          <Text style={styles.questionHeading}>🔮 Intenção Ativa:</Text>
          <Text style={styles.questionContent}>"{question.trim()}"</Text>
        </View>
      )}

      {/* 3. Área da Mesa Oracular */}
      {drawnCards.length > 0 ? (
        <View style={styles.deskContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsScroll}>
            {drawnCards.map((card, idx) => (
              <TarotCard
                key={card.id + idx}
                card={card}
                isRevealed={card.isRevealed}
                positionTitle={card.positionTitle}
                isSelected={selectedIndex === idx}
                onPress={() => {
                  if (!card.isRevealed) {
                    handleRevealCard(idx);
                  } else {
                    setSelectedIndex(idx);
                  }
                }}
              />
            ))}
          </ScrollView>

          {/* Botão Principal de IA em Destaque */}
          <TouchableOpacity style={styles.aiButton} onPress={handleConsultAI}>
            <Text style={styles.aiButtonText}>✨ Interpretar com IA Oracular ✨</Text>
            <Text style={styles.aiButtonSub}>Análise profunda e holística de todas as cartas</Text>
          </TouchableOpacity>

          {/* 4. Painel de Interpretação da Carta Selecionada */}
          <CardInterpretation
            card={selectedCard}
            onSaveJournal={() => handleSaveJournalAction(null)}
          />
        </View>
      ) : (
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderEmoji}>🔮</Text>
          <Text style={styles.placeholderTitle}>A Mesa está Limpa</Text>
          <Text style={styles.placeholderDesc}>
            Selecione uma tiragem acima (incluindo Cruz Celta de 10 cartas) e toque em "Tirar Cartas".
          </Text>
        </View>
      )}

      {/* 5. Modal de Leitura Completa com IA */}
      <AIReadingModal
        visible={showAiModal}
        loading={loadingAI}
        readingText={aiReadingText}
        onClose={closeModal}
        onSaveJournal={() => {
          handleSaveJournalAction(aiReadingText);
          closeModal();
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07030e'
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40
  },
  questionBox: {
    backgroundColor: 'rgba(35, 16, 60, 0.8)',
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ffd700',
    marginBottom: 16
  },
  questionHeading: {
    color: '#ffd700',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 2
  },
  questionContent: {
    color: '#ffffff',
    fontSize: 14,
    fontStyle: 'italic'
  },
  deskContainer: {
    alignItems: 'center',
    width: '100%'
  },
  cardsScroll: {
    paddingVertical: 10,
    alignItems: 'center'
  },
  aiButton: {
    width: '100%',
    backgroundColor: '#4c1d95',
    borderWidth: 1.5,
    borderColor: '#ffd700',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginVertical: 12,
    elevation: 6
  },
  aiButtonText: {
    color: '#ffd700',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5
  },
  aiButtonSub: {
    color: '#d8b4fe',
    fontSize: 12,
    marginTop: 2
  },
  placeholderBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60
  },
  placeholderEmoji: {
    fontSize: 48,
    marginBottom: 12
  },
  placeholderTitle: {
    color: '#e5dcf4',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6
  },
  placeholderDesc: {
    color: '#8b7a9e',
    fontSize: 13,
    textAlign: 'center',
    maxWidth: 280
  }
});

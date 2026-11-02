import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DiarioScreen() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    loadJournal();
  }, []);

  const loadJournal = async () => {
    try {
      const data = await AsyncStorage.getItem('tarot_journal');
      if (data) {
        setEntries(JSON.parse(data));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleClear = () => {
    Alert.alert('Limpar Diário', 'Deseja excluir todas as anotações do seu diário?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.removeItem('tarot_journal');
          setEntries([]);
        }
      }
    ]);
  };

  const renderItem = ({ item }) => {
    const formattedDate = new Date(item.date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    return (
      <View style={styles.entryCard}>
        <View style={styles.entryHeader}>
          <Text style={styles.spreadBadge}>{item.spreadName}</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>

        <Text style={styles.questionText}>💭 {item.question}</Text>

        <View style={styles.cardsSummary}>
          {item.cards.map((c, i) => (
            <View key={i} style={styles.cardRow}>
              <Text style={styles.cardPos}>{c.position}:</Text>
              <Text style={styles.cardName}>
                {c.name} {c.isReversed ? '(Invertida)' : ''}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.headerTitle}>📖 Diário & Histórico</Text>
        {entries.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <Text style={styles.clearText}>Limpar Tudo</Text>
          </TouchableOpacity>
        )}
      </View>

      {entries.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>📜</Text>
          <Text style={styles.emptyTitle}>Seu diário está em branco</Text>
          <Text style={styles.emptySub}>
            Tire cartas na Mesa e toque em "Salvar no Diário" para acompanhar seu histórico e jornada diária.
          </Text>
        </View>
      ) : (
        <FlatList
          data={entries}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07030e'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 175, 55, 0.2)'
  },
  headerTitle: {
    color: '#e5dcf4',
    fontSize: 16,
    fontWeight: '700'
  },
  clearText: {
    color: '#f87171',
    fontSize: 13,
    fontWeight: '600'
  },
  listContent: {
    padding: 16,
    paddingBottom: 30
  },
  entryCard: {
    backgroundColor: 'rgba(25, 12, 44, 0.8)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(147, 51, 234, 0.2)'
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  spreadBadge: {
    color: '#ffd700',
    backgroundColor: 'rgba(212, 175, 55, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    fontSize: 11,
    fontWeight: '700'
  },
  dateText: {
    color: '#8b7a9e',
    fontSize: 11
  },
  questionText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10
  },
  cardsSummary: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    paddingTop: 8,
    gap: 4
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardPos: {
    color: '#d4af37',
    fontSize: 12,
    fontWeight: '600',
    marginRight: 6
  },
  cardName: {
    color: '#c4b5fd',
    fontSize: 12
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 12
  },
  emptyTitle: {
    color: '#e5dcf4',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6
  },
  emptySub: {
    color: '#7a6f94',
    fontSize: 13,
    textAlign: 'center'
  }
});

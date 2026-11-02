import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch
} from 'react-native';
import { spreadsConfig } from '../data/tarotData';

export default function MesaToolbar({
  spreadKey,
  onSelectSpread,
  question,
  onChangeQuestion,
  allowReversed,
  onToggleReversed,
  hasDrawn,
  onDraw,
  onRevealAll,
  onConsultAI
}) {
  return (
    <View style={styles.glassPanel}>
      <Text style={styles.sectionTitle}>Escolha a Tiragem:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.spreadScroll}>
        {Object.values(spreadsConfig).map(s => (
          <TouchableOpacity
            key={s.key}
            onPress={() => onSelectSpread(s.key)}
            style={[styles.spreadTab, spreadKey === s.key && styles.spreadTabActive]}
          >
            <Text style={[styles.spreadTabText, spreadKey === s.key && styles.spreadTabTextActive]}>
              {s.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.label}>Intenção / Pergunta:</Text>
      <TextInput
        style={styles.input}
        placeholder="O que os arcanos podem revelar para você hoje?"
        placeholderTextColor="#7a6f94"
        value={question}
        onChangeText={onChangeQuestion}
      />

      <View style={styles.rowBetween}>
        <Text style={styles.switchLabel}>Permitir Cartas Invertidas</Text>
        <Switch
          value={allowReversed}
          onValueChange={onToggleReversed}
          trackColor={{ false: '#2a1a45', true: '#6b21a8' }}
          thumbColor={allowReversed ? '#ffd700' : '#888'}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.drawBtn} onPress={onDraw}>
          <Text style={styles.drawBtnText}>✨ Tirar Cartas</Text>
        </TouchableOpacity>

        {hasDrawn && (
          <TouchableOpacity style={styles.revealAllBtn} onPress={onRevealAll}>
            <Text style={styles.revealAllBtnText}>👁️ Revelar</Text>
          </TouchableOpacity>
        )}

        {hasDrawn && (
          <TouchableOpacity style={styles.aiQuickBtn} onPress={onConsultAI}>
            <Text style={styles.aiQuickBtnText}>🔮 IA</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  glassPanel: {
    backgroundColor: 'rgba(25, 12, 44, 0.75)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)',
    marginBottom: 16
  },
  sectionTitle: {
    color: '#e5dcf4',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8
  },
  spreadScroll: {
    marginBottom: 14
  },
  spreadTab: {
    backgroundColor: 'rgba(50, 25, 80, 0.5)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.2)'
  },
  spreadTabActive: {
    backgroundColor: '#6b21a8',
    borderColor: '#ffd700'
  },
  spreadTabText: {
    color: '#bfa7d9',
    fontSize: 13,
    fontWeight: '600'
  },
  spreadTabTextActive: {
    color: '#ffffff',
    fontWeight: '700'
  },
  label: {
    color: '#bfa7d9',
    fontSize: 13,
    marginBottom: 6
  },
  input: {
    backgroundColor: 'rgba(12, 6, 24, 0.8)',
    borderWidth: 1,
    borderColor: 'rgba(147, 51, 234, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 12
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14
  },
  switchLabel: {
    color: '#e5dcf4',
    fontSize: 13
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  drawBtn: {
    flex: 1.2,
    backgroundColor: '#7c3aed',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4
  },
  drawBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14
  },
  revealAllBtn: {
    backgroundColor: 'rgba(107, 33, 168, 0.4)',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9333ea'
  },
  revealAllBtnText: {
    color: '#e9d5ff',
    fontWeight: '600',
    fontSize: 13
  },
  aiQuickBtn: {
    backgroundColor: '#ffd700',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    elevation: 4
  },
  aiQuickBtnText: {
    color: '#2a0845',
    fontWeight: '800',
    fontSize: 13
  }
});

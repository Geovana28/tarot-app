import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function CardInterpretation({ card, onSaveJournal }) {
  if (!card || !card.isRevealed) return null;

  return (
    <View style={styles.interpretationBox}>
      <View style={styles.interpretationHeader}>
        <View style={{ flex: 1 }}>
          <Text style={styles.interpPosition}>{card.positionTitle}</Text>
          <Text style={styles.interpName}>
            {card.name} {card.isReversed ? '(Invertida)' : ''}
          </Text>
        </View>
        <TouchableOpacity style={styles.saveJournalBtn} onPress={onSaveJournal}>
          <Text style={styles.saveJournalBtnText}>💾 Salvar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keywordRow}>
        {card.keywords.map((kw, i) => (
          <View key={i} style={styles.keywordBadge}>
            <Text style={styles.keywordText}>{kw}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.meaningText}>
        {card.isReversed ? card.reversed : card.upright}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  interpretationBox: {
    width: '100%',
    backgroundColor: 'rgba(23, 11, 41, 0.9)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
    marginTop: 6
  },
  interpretationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  interpPosition: {
    color: '#ffd700',
    fontSize: 12,
    fontWeight: '700'
  },
  interpName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 2
  },
  saveJournalBtn: {
    backgroundColor: '#6b21a8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8
  },
  saveJournalBtnText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 12
  },
  keywordRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12
  },
  keywordBadge: {
    backgroundColor: 'rgba(147, 51, 234, 0.25)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#c084fc'
  },
  keywordText: {
    color: '#f3e8ff',
    fontSize: 11
  },
  meaningText: {
    color: '#d1c7e0',
    fontSize: 14,
    lineHeight: 22
  }
});

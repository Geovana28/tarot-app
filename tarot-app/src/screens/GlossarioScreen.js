import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import { tarotData } from '../data/tarotData';
import { getCardImage } from '../data/cardImages';

export default function GlossarioScreen() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [modalCard, setModalCard] = useState(null);

  const filteredCards = tarotData.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(search.toLowerCase()) ||
      card.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()));

    if (!matchesSearch) return false;
    if (filter === 'all') return true;
    if (filter === 'major') return card.category === 'major';
    return card.suit === filter;
  });

  const renderCardItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardItem}
      activeOpacity={0.8}
      onPress={() => setModalCard(item)}
    >
      <Image
        source={getCardImage(item.image)}
        style={styles.cardThumbnail}
        resizeMode="cover"
      />
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardCategory}>
          {item.category === 'major' ? 'Arcano Maior' : `Naipe de ${item.suit}`}
        </Text>
        <View style={styles.badgeRow}>
          {item.keywords.slice(0, 2).map((k, idx) => (
            <View key={idx} style={styles.badge}>
              <Text style={styles.badgeText}>{k}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Barra de Pesquisa */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar carta por nome ou palavra-chave..."
          placeholderTextColor="#7a6f94"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Filtros por Naipe / Categoria */}
      <View style={styles.filterRow}>
        {[
          { key: 'all', label: 'Todas' },
          { key: 'major', label: 'Maiores' },
          { key: 'wands', label: 'Paus' },
          { key: 'cups', label: 'Copas' },
          { key: 'swords', label: 'Espadas' },
          { key: 'pentacles', label: 'Ouros' }
        ].map(f => (
          <TouchableOpacity
            key={f.key}
            onPress={() => setFilter(f.key)}
            style={[styles.filterChip, filter === f.key && styles.filterChipActive]}
          >
            <Text style={[styles.filterChipText, filter === f.key && styles.filterChipTextActive]}>
              {f.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista das 78 Cartas */}
      <FlatList
        data={filteredCards}
        keyExtractor={item => item.id}
        renderItem={renderCardItem}
        contentContainerStyle={styles.listContent}
      />

      {/* Modal de Detalhes da Carta */}
      <Modal
        visible={!!modalCard}
        transparent
        animationType="slide"
        onRequestClose={() => setModalCard(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {modalCard && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{modalCard.name}</Text>
                  <TouchableOpacity onPress={() => setModalCard(null)} style={styles.closeBtn}>
                    <Text style={styles.closeBtnText}>✕</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.modalBody}>
                  <Image
                    source={getCardImage(modalCard.image)}
                    style={styles.modalImage}
                    resizeMode="contain"
                  />

                  <View style={styles.meaningSection}>
                    <Text style={styles.meaningLabel}>☀️ Significado Direto:</Text>
                    <Text style={styles.meaningDesc}>{modalCard.upright}</Text>

                    <Text style={[styles.meaningLabel, { color: '#f87171', marginTop: 10 }]}>
                      ↺ Significado Invertido:
                    </Text>
                    <Text style={styles.meaningDesc}>{modalCard.reversed}</Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07030e',
    paddingTop: 10
  },
  searchBox: {
    paddingHorizontal: 16,
    marginBottom: 10
  },
  searchInput: {
    backgroundColor: 'rgba(25, 12, 44, 0.8)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
    color: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
    gap: 6
  },
  filterChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    backgroundColor: 'rgba(35, 16, 60, 0.6)'
  },
  filterChipActive: {
    backgroundColor: '#7c3aed'
  },
  filterChipText: {
    color: '#a78bfa',
    fontSize: 12,
    fontWeight: '600'
  },
  filterChipTextActive: {
    color: '#ffffff',
    fontWeight: '700'
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24
  },
  cardItem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(25, 12, 44, 0.7)',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.15)'
  },
  cardThumbnail: {
    width: 50,
    height: 80,
    borderRadius: 6
  },
  cardInfo: {
    marginLeft: 12,
    flex: 1
  },
  cardName: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700'
  },
  cardCategory: {
    color: '#d4af37',
    fontSize: 12,
    marginBottom: 6
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 6
  },
  badge: {
    backgroundColor: 'rgba(147, 51, 234, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8
  },
  badgeText: {
    color: '#d8b4fe',
    fontSize: 10
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    padding: 20
  },
  modalContent: {
    backgroundColor: '#130924',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ffd700'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  modalTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700'
  },
  closeBtn: {
    padding: 4
  },
  closeBtnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700'
  },
  modalBody: {
    alignItems: 'center'
  },
  modalImage: {
    width: 120,
    height: 190,
    borderRadius: 8,
    marginBottom: 14
  },
  meaningSection: {
    width: '100%'
  },
  meaningLabel: {
    color: '#ffd700',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4
  },
  meaningDesc: {
    color: '#d1c7e0',
    fontSize: 13,
    lineHeight: 18
  }
});

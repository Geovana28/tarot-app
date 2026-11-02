import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import MesaScreen from './src/screens/MesaScreen';
import DiarioScreen from './src/screens/DiarioScreen';
import GlossarioScreen from './src/screens/GlossarioScreen';

export default function App() {
  const [currentTab, setCurrentTab] = useState('mesa');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#07030e" />

      {/* Header do Aplicativo */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🔮 Tarot Místico</Text>
        <Text style={styles.headerSubtitle}>Oráculo & Diário Pessoal</Text>
      </View>

      {/* Navegação por Abas Superiores / Bottom Bar */}
      <View style={styles.tabNav}>
        <TouchableOpacity
          onPress={() => setCurrentTab('mesa')}
          style={[styles.tabButton, currentTab === 'mesa' && styles.tabButtonActive]}
        >
          <Text style={[styles.tabText, currentTab === 'mesa' && styles.tabTextActive]}>
            🃏 Mesa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentTab('diario')}
          style={[styles.tabButton, currentTab === 'diario' && styles.tabButtonActive]}
        >
          <Text style={[styles.tabText, currentTab === 'diario' && styles.tabTextActive]}>
            📖 Diário
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentTab('glossario')}
          style={[styles.tabButton, currentTab === 'glossario' && styles.tabButtonActive]}
        >
          <Text style={[styles.tabText, currentTab === 'glossario' && styles.tabTextActive]}>
            📜 Cartas
          </Text>
        </TouchableOpacity>
      </View>

      {/* Área da Tela Selecionada */}
      <View style={styles.screenContainer}>
        {currentTab === 'mesa' && <MesaScreen />}
        {currentTab === 'diario' && <DiarioScreen />}
        {currentTab === 'glossario' && <GlossarioScreen />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#07030e'
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 175, 55, 0.2)',
    alignItems: 'center'
  },
  headerTitle: {
    color: '#ffd700',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1
  },
  headerSubtitle: {
    color: '#a78bfa',
    fontSize: 12,
    marginTop: 2
  },
  tabNav: {
    flexDirection: 'row',
    backgroundColor: '#0d061a',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(168, 85, 247, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 8
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 4
  },
  tabButtonActive: {
    backgroundColor: '#6b21a8'
  },
  tabText: {
    color: '#8b7a9e',
    fontSize: 13,
    fontWeight: '600'
  },
  tabTextActive: {
    color: '#ffffff',
    fontWeight: '700'
  },
  screenContainer: {
    flex: 1
  }
});

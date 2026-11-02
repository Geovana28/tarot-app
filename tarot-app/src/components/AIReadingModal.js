import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

export default function AIReadingModal({
  visible,
  loading,
  readingText,
  onClose,
  onSaveJournal
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.aiModalContent}>
          <View style={styles.aiModalHeader}>
            <Text style={styles.aiModalTitle}>✨ Oráculo de IA</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <View style={styles.aiLoadingContainer}>
              <ActivityIndicator size="large" color="#ffd700" />
              <Text style={styles.aiLoadingText}>Conectando as energias dos arcanos...</Text>
              <Text style={styles.aiLoadingSub}>Interpretando a sincronicidade da sua pergunta</Text>
            </View>
          ) : (
            <ScrollView style={styles.aiScrollBody}>
              <Text style={styles.aiResponseText}>{readingText}</Text>
              <TouchableOpacity
                style={styles.saveFromModalBtn}
                onPress={onSaveJournal}
              >
                <Text style={styles.saveFromModalBtnText}>💾 Salvar Leitura Completa no Diário</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    padding: 16
  },
  aiModalContent: {
    backgroundColor: '#120722',
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: '#ffd700',
    maxHeight: '85%',
    overflow: 'hidden'
  },
  aiModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 175, 55, 0.3)',
    backgroundColor: '#1c0c36'
  },
  aiModalTitle: {
    color: '#ffd700',
    fontSize: 18,
    fontWeight: '800'
  },
  closeBtn: {
    padding: 6
  },
  closeBtnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700'
  },
  aiLoadingContainer: {
    padding: 40,
    alignItems: 'center'
  },
  aiLoadingText: {
    color: '#f3e8ff',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 16
  },
  aiLoadingSub: {
    color: '#a78bfa',
    fontSize: 12,
    marginTop: 6
  },
  aiScrollBody: {
    padding: 16
  },
  aiResponseText: {
    color: '#e9d5ff',
    fontSize: 14,
    lineHeight: 24
  },
  saveFromModalBtn: {
    backgroundColor: '#7c3aed',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  saveFromModalBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14
  }
});

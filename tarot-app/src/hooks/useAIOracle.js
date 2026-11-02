import { useState } from 'react';
import { getAITarotReading } from '../services/aiOracle';

export function useAIOracle() {
  const [loadingAI, setLoadingAI] = useState(false);
  const [aiReadingText, setAiReadingText] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);

  const consultAI = async ({ question, spreadName, cards }) => {
    setLoadingAI(true);
    setShowAiModal(true);

    try {
      const reading = await getAITarotReading({
        question,
        spreadName,
        cards
      });
      setAiReadingText(reading);
    } catch (err) {
      setAiReadingText('Ocorreu um erro ao sintonizar o oráculo de IA.');
    } finally {
      setLoadingAI(false);
    }
  };

  const closeModal = () => {
    setShowAiModal(false);
  };

  return {
    loadingAI,
    aiReadingText,
    showAiModal,
    consultAI,
    closeModal
  };
}

import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tarotData, spreadsConfig } from '../data/tarotData';

export function useTarotGame() {
  const [spreadKey, setSpreadKey] = useState('three');
  const [question, setQuestion] = useState('');
  const [allowReversed, setAllowReversed] = useState(true);
  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentSpread = spreadsConfig[spreadKey];

  const handleDraw = () => {
    const shuffled = [...tarotData].sort(() => 0.5 - Math.random());
    const picked = shuffled.slice(0, currentSpread.count).map((card, idx) => ({
      ...card,
      isReversed: allowReversed ? Math.random() < 0.35 : false,
      isRevealed: false,
      positionTitle: currentSpread.positions[idx]?.title || `Carta ${idx + 1}`
    }));

    setDrawnCards(picked);
    setSelectedIndex(0);
  };

  const handleRevealCard = (index) => {
    setDrawnCards(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], isRevealed: true };
      return copy;
    });
    setSelectedIndex(index);
  };

  const handleRevealAll = () => {
    setDrawnCards(prev => prev.map(c => ({ ...c, isRevealed: true })));
  };

  const selectSpread = (key) => {
    setSpreadKey(key);
    setDrawnCards([]);
  };

  const saveToJournal = async (aiText = null) => {
    if (drawnCards.length === 0) return false;

    const newEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      spreadName: currentSpread.name,
      question: question.trim() || 'Consulta geral de autoconhecimento',
      aiReading: aiText,
      cards: drawnCards.map(c => ({
        name: c.name,
        position: c.positionTitle,
        isReversed: c.isReversed,
        meaning: c.isReversed ? c.reversed : c.upright
      }))
    };

    const existingData = await AsyncStorage.getItem('tarot_journal');
    const list = existingData ? JSON.parse(existingData) : [];
    list.unshift(newEntry);
    await AsyncStorage.setItem('tarot_journal', JSON.stringify(list));
    return true;
  };

  return {
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
    selectedCard: drawnCards[selectedIndex],
    handleDraw,
    handleRevealCard,
    handleRevealAll,
    saveToJournal
  };
}

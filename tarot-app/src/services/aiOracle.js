/**
 * Serviço de Oráculo com IA para interpretação profunda de Tarot
 */
const DEFAULT_GEMINI_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || "";

export async function getAITarotReading({ question, spreadName, cards, apiKey }) {
  const activeKey = (apiKey && apiKey.trim().length > 0) ? apiKey.trim() : DEFAULT_GEMINI_KEY;

  const cardsDescription = cards.map((c, i) => {
    const orientation = c.isReversed ? 'Invertida' : 'Ereta (Normal)';
    return `${i + 1}. Posição: "${c.positionTitle}" -> Carta: ${c.name} (${orientation}) - Palavras-chave: ${c.keywords.join(', ')}`;
  }).join('\n');

  const prompt = `Você é um sábio oraculista e mestre de Tarot com vasta sabedoria hermética, psicológica (junguiana) e mística.
O consulente realizou uma tiragem de Tarot com as seguintes características:

- Tipo de Tiragem: ${spreadName}
- Intenção / Pergunta do Consulente: "${question || 'Consulta oracular geral de autoconhecimento e orientação de destino'}"
- Cartas reveladas na mesa:
${cardsDescription}

Por favor, elabore uma leitura interpretativa rica, profunda, acolhedora e inspiradora:
1. Responda diretamente à intenção do consulente conectando os ensinamentos dessas cartas.
2. Analise como as energias das cartas dialogam e se influenciam mutualmente.
3. Entregue um conselho prático e oracular de síntese para o consulente seguir.

Seja poético, profundo e claro, usando formatação limpa e parágrafos bem espaçados.`;

  // Chamada oficial à API Google Gemini usando o endpoint correto e cabeçalho X-goog-api-key
  if (activeKey && activeKey.trim().length > 0) {
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": activeKey
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }]
              }
            ]
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text;
      } else {
        const errData = await response.json().catch(() => null);
        console.warn("Retorno da API Gemini:", errData);
      }
    } catch (e) {
      console.warn("Falha na chamada online, caindo para síntese oracular de contingência:", e);
    }
  }

  // Síntese Oracular Mística Inteligente Local (Gera interpretação holística imediata se estiver sem internet ou offline)
  return generateLocalMysticSynthesis(question, spreadName, cards);
}

function generateLocalMysticSynthesis(question, spreadName, cards) {
  const majorCount = cards.filter(c => c.category === 'major').length;
  const reversedCount = cards.filter(c => c.isReversed).length;
  
  let depth = '';
  if (majorCount >= 2) {
    depth = 'Há uma forte presença de Arcanos Maiores, indicando forças arquetípicas profundas do destino e lições espirituais de grande relevância no seu momento atual.';
  } else {
    depth = 'A tiragem é dominada por energias cotidianas dos Arcanos Menores, sugerindo que o foco principal reside em suas ações práticas, comunicação e escolhas do dia a dia.';
  }

  let flow = '';
  if (reversedCount > 0) {
    flow = `Com ${reversedCount} ${reversedCount === 1 ? 'carta invertida' : 'cartas invertidas'}, o oráculo sinaliza bloqueios temporários ou energias que exigem reflexão interna antes de se manifestarem externamente.`;
  } else {
    flow = 'Todas as energias fluem de forma direta e ativa, trazendo clareza e impulso para suas decisões imediatas.';
  }

  const cardSummaries = cards.map(c => {
    const meaning = c.isReversed ? c.reversed : c.upright;
    return `• ${c.positionTitle}: ${c.name} (${c.isReversed ? 'Invertida' : 'Ereta'}) ressalta ${meaning}`;
  }).join('\n\n');

  return `🔮 SÍNTESE ORACULAR DA TIRAGEM (${spreadName.toUpperCase()})

${question ? `💭 Intenção: "${question}"\n\n` : ''}${depth}
${flow}

📜 MENSAGEM INTEGRADA DAS CARTAS:
${cardSummaries}

✨ CONSELHO DE CONCLUSÃO:
Confie na sabedoria das sincronicidades. O oráculo indica que você possui as ferramentas necessárias para navegar esta fase. Mantenha o equilíbrio entre a sua intuição interior e as decisões práticas do mundo material.`;
}

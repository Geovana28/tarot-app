/**
 * TAROT MÍSTICO - BANCO DE DADOS E LÓGICA DE APLICAÇÃO JS
 */

// ==========================================
// 1. BANCO DE DADOS DAS 78 CARTAS DO TAROT
// ==========================================

const tarotData = [
    // --- ARCANOS MAIORES (22 CARTAS) ---
    {
        id: "major_00",
        name: "0 - O Louco",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-louco.jpg",
        keywords: ["Novos começos", "Inocência", "Espontaneidade", "Livre arbítrio"],
        upright: "Início de uma nova jornada, fé no universo, salto de fé, liberdade, entusiasmo e abraçar o desconhecido com otimismo.",
        reversed: "Imprudência, risco desnecessário, ingenuidade excessiva, estagnação por medo ou decisões impensadas."
    },
    {
        id: "major_01",
        name: "I - O Mago",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-mago.jpg",
        keywords: ["Manifestação", "Poder pessoal", "Habilidade", "Foco"],
        upright: "Capacidade de transformar ideias em realidade, foco, recursos disponíveis, força de vontade e iniciativa.",
        reversed: "Manipulação, talentos desperdiçados, falta de planejamento, ilusão ou falta de energia para agir."
    },
    {
        id: "major_02",
        name: "II - A Sacerdotisa",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-sacerdotisa.jpg",
        keywords: ["Intuição", "Inconsciente", "Mistério", "Sabedoria interior"],
        upright: "Confie na sua intuição, busque respostas no seu interior, segredos revelados, serenidade e sabedoria silenciosa.",
        reversed: "Desconexão da intuição, segredos ocultos maliciosos, superficialidade, sentimentos reprimidos."
    },
    {
        id: "major_03",
        name: "III - A Imperatriz",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-imperatriz.jpg",
        keywords: ["Fertilidade", "Abundância", "Natureza", "Criatividade"],
        upright: "Crescimento, prosperidade, cuidado, criatividade em alta, beleza, abundância material e emocional.",
        reversed: "Bloqueio criativo, dependência emocional, negligência, escassez ou excesso de apego."
    },
    {
        id: "major_04",
        name: "IV - O Imperador",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-imperador.jpg",
        keywords: ["Estrutura", "Autoridade", "Estabilidade", "Liderança"],
        upright: "Organização, disciplina, liderança sólida, criação de limites, estabilidade financeira e autoridade justa.",
        reversed: "Rigidez, abuso de poder, falta de controle, teimosia ou excesso de autoritarismo."
    },
    {
        id: "major_05",
        name: "V - O Hierofante",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-papa.jpg",
        keywords: ["Tradição", "Ensino", "Espiritualidade", "Conformidade"],
        upright: "Busca por conhecimento, aprendizado com mestres, tradições, valores espirituais e trabalho em equipe estruturado.",
        reversed: "Rebeldia, quebra de dogmas, crenças limitantes, rigidez mental ou conselhos ruins."
    },
    {
        id: "major_06",
        name: "VI - Os Enamorados",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/os-enamorados.jpg",
        keywords: ["Amor", "Escolhas", "Harmonia", "Alinhamento de valores"],
        upright: "União, conexões profundas, escolhas importantes baseadas no coração, harmonia e alinhamento moral.",
        reversed: "Desarmonia, conflito interno de valores, maus caminhos nas escolhas, desequilíbrio em parcerias."
    },
    {
        id: "major_07",
        name: "VII - O Carro",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-carro.jpg",
        keywords: ["Determinação", "Vitória", "Autocontrol", "Foco"],
        upright: "Superação de obstáculos, determinação, progresso rápido, sucesso através do foco e disciplina.",
        reversed: "Perda de controle, falta de direção, agressividade desmedida ou atrasos em planos."
    },
    {
        id: "major_08",
        name: "VIII - A Força",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-forca.jpg",
        keywords: ["Coragem", "Paciência", "Compaixão", "Domínio próprio"],
        upright: "Força interior, paciência para dobrar dificuldades, compaixão, resiliência e controle dos impulsos.",
        reversed: "Dúvida sobre si mesmo, fraqueza emocional, impaciência, insegurança ou raiva descontrolada."
    },
    {
        id: "major_09",
        name: "IX - O Eremita",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-eremita.jpg",
        keywords: ["Introspecção", "Busca da verdade", "Guia interior", "Solitude"],
        upright: "Momento de pausar e olhar para dentro, busca de autoconhecimento, sabedoria madura e isolamento saudável.",
        reversed: "Isolamento excessivo, solidão amargurada, recusa de conselhos válidos ou medo do mundo exterior."
    },
    {
        id: "major_10",
        name: "X - A Roda da Fortuna",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-roda-da-fortuna.jpg",
        keywords: ["Ciclos", "Mudança", "Destino", "Oportunidade"],
        upright: "Mudanças inevitáveis e positivas, virada de sorte, ciclos que se fecham para novos começarem.",
        reversed: "Resistência à mudança, azar temporário, sensação de falta de controle sobre os acontecimentos."
    },
    {
        id: "major_11",
        name: "XI - A Justiça",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-justica.jpg",
        keywords: ["Equilíbrio", "Verdade", "Causa e efeito", "Honestidade"],
        upright: "Decisões imparciais, justiça sendo feita, colheita do que foi semeado, clareza e responsabilidade.",
        reversed: "Injustiça, falta de honestidade, recusa em assumir erros, julgamentos precipitados."
    },
    {
        id: "major_12",
        name: "XII - O Enforcado",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-enforcado.jpg",
        keywords: ["Pausa", "Nova perspectiva", "Renúncia", "Entrega"],
        upright: "Ver as coisas sob outro ângulo, pausa necessária, desapego, paciência enquanto a vida se ajusta.",
        reversed: "Estagnação inútil, vitimização, resistência a aceitar a realidade, atrasos por teimosia."
    },
    {
        id: "major_13",
        name: "XIII - A Morte",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-morte.jpg",
        keywords: ["Transformação", "Fim de ciclo", "Transição", "Renascimento"],
        upright: "Final de algo velho para abertura do novo, transformação profunda, desapego do passado e renovação.",
        reversed: "Resistência à mudança necessária, apego ao passado, medo da transição, estagnação."
    },
    {
        id: "major_14",
        name: "XIV - A Temperança",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-temperanca.jpg",
        keywords: ["Equilíbrio", "Moderação", "Paciência", "Harmonia"],
        upright: "Caminho do meio, paciência, cura, integração de opostos, paz interior e moderação.",
        reversed: "Desequilíbrio, excessos, impaciência, falta de paz interior, conflitos de interesse."
    },
    {
        id: "major_15",
        name: "XV - O Diabo",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-diabo.jpg",
        keywords: ["Apegos", "Ilusão", "Vícios", "Materialismo"],
        upright: "Sensação de aprisionamento, apegos tóxicos, ilusões materiais, tentações e limites autoimpostos.",
        reversed: "Quebra de correntes, libertação de vícios, tomada de consciência, superação do medo."
    },
    {
        id: "major_16",
        name: "XVI - A Torre",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-torre.jpg",
        keywords: ["Ruptura", "Revelação", "Mudança súbita", "Desconstrução"],
        upright: "Quebra de ilusões, mudanças repentinas mas necessárias, revelações que mudam o rumo, libertação dolorosa porém útil.",
        reversed: "Evitar o inevitável, adiar um término/mudança, medo do colapso, sofrimento prolongado."
    },
    {
        id: "major_17",
        name: "XVII - A Estrela",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-estrela.jpg",
        keywords: ["Esperança", "Fé", "Inspiração", "Renovação"],
        upright: "Esperança renovada, paz de espírito, inspiração, momentos de otimismo e cura emocional.",
        reversed: "Falta de fé, desespero temporário, desânimo, desconexão com o propósito de vida."
    },
    {
        id: "major_18",
        name: "XVIII - A Lua",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/a-lua.jpg",
        keywords: ["Ilusão", "Medo", "Inconsciente", "Intuição"],
        upright: "Ilusões, incertezas, medos ocultos, imaginação fertilizada, necessidade de encarar sombras internas.",
        reversed: "Clareza surgindo, superação de medos e paranoias, desmistificação de ilusões."
    },
    {
        id: "major_19",
        name: "XIX - O Sol",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-sol.jpg",
        keywords: ["Alegria", "Sucesso", "Vitalidade", "Clareza"],
        upright: "Sucesso, clareza total, energia vital, felicidade, otimismo e conquistas brilhantes.",
        reversed: "Atrasa no sucesso, otimismo exagerado e irrealista, tristeza passageira ou energia baixa."
    },
    {
        id: "major_20",
        name: "XX - O Julgamento",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-julgamento.jpg",
        keywords: ["Despertar", "Avaliação", "Chamado", "Perdão"],
        upright: "Despertar espiritual, tomada de decisões conscientes, perdão do passado e novos caminhos de vida.",
        reversed: "Autocrítica excessiva, remorso, recusa em aprender com o passado, adiamento do inevitável."
    },
    {
        id: "major_21",
        name: "XXI - O Mundo",
        category: "major",
        suit: "major",
        image: "tarot-app/Cartas/o-mundo.jpg",
        keywords: ["Conclusão", "Plenitude", "Realização", "Viagem"],
        upright: "Conclusão bem-sucedida de um ciclo, sensação de plenitude, triunfo, integração e sucesso total.",
        reversed: "Falta de fechamento, ciclos incompletos, sensação de estagnação na reta final."
    }
];

// --- GERADOR COMPLETO DOS 56 ARCANOS MENORES ---
const suitsInfo = [
    {
        code: "wands",
        slug: "paus",
        name: "Paus",
        symbol: "♣",
        element: "Fogo (Ação, Criatividade, Paixão, Projetos)",
        uprightBase: "energia dinâmica, inspiração e força de vontade para realizar.",
        reversedBase: "impulsividade, ansiedade, projetos travados ou esgotamento."
    },
    {
        code: "cups",
        slug: "copas",
        name: "Copas",
        symbol: "♥",
        element: "Água (Emoção, Amor, Intuição, Relacionamentos)",
        uprightBase: "harmonia afetiva, intuição aflorada e sentimentos sinceros.",
        reversedBase: "instabilidade emocional, ilusão amorosa ou ressentimentos."
    },
    {
        code: "swords",
        slug: "espadas",
        name: "Espadas",
        symbol: "♠",
        element: "Ar (Mente, Verdade, Comunicação, Conflito)",
        uprightBase: "clareza mental, busca da verdade e raciocínio lógico afiado.",
        reversedBase: "conflitos verbais, pensamentos obsessivos ou estresse mental."
    },
    {
        code: "pentacles",
        slug: "ouros",
        name: "Ouros",
        symbol: "♦",
        element: "Terra (Matéria, Finanças, Saúde, Trabalho)",
        uprightBase: "estabilidade financeira, progresso tangível e prosperidade.",
        reversedBase: "prejuízos materiais, apego excessivo ou insegurança física."
    }
];

const ranksInfo = [
    { num: 1, slug: "as", name: "Ás", keyU: ["Novo Começo", "Potencial"], keyR: ["Oportunidade Perdida", "Bloqueio"] },
    { num: 2, slug: "dois", name: "2 de", keyU: ["Parceria", "Decisão"], keyR: ["Desequilíbrio", "Dúvida"] },
    { num: 3, slug: "tres", name: "3 de", keyU: ["Crescimento", "Expansão"], keyR: ["Atrasos", "Falta de Apoio"] },
    { num: 4, slug: "quatro", name: "4 de", keyU: ["Estabilidade", "Repouso"], keyR: ["Estagnação", "Rigidez"] },
    { num: 5, slug: "cinco", name: "5 de", keyU: ["Desafio", "Mudança"], keyR: ["Recuperação", "Superação"] },
    { num: 6, slug: "seis", name: "6 de", keyU: ["Vitória", "Generosidade"], keyR: ["Orgulho", "Desigualdade"] },
    { num: 7, slug: "sete", name: "7 de", keyU: ["Avaliação", "Estratégia"], keyR: ["Paciência Esgotada", "Frustração"] },
    { num: 8, slug: "oito", name: "8 de", keyU: ["Movimento", "Dedicação"], keyR: ["Apressamento", "Falta de Foco"] },
    { num: 9, slug: "nove", name: "9 de", keyU: ["Persistência", "Conquista"], keyR: ["Cansaço", "Insegurança"] },
    { num: 10, slug: "dez", name: "10 de", keyU: ["Plenitude", "Culminação"], keyR: ["Sobrecarga", "Esgotamento"] },
    { num: 11, slug: "valete", name: "Pajem de", keyU: ["Notícias", "Curiosidade"], keyR: ["Imaturidade", "Distração"] },
    { num: 12, slug: "cavaleiro", name: "Cavaleiro de", keyU: ["Ação Direta", "Jornada"], keyR: ["Impulsividade", "Imprudência"] },
    { num: 13, slug: "rainha", name: "Rainha de", keyU: ["Maturidade", "Nutrição"], keyR: ["Frieza", "Ciúme"] },
    { num: 14, slug: "rei", name: "Rei de", keyU: ["Domínio", "Liderança"], keyR: ["Abuso de Poder", "Tiranismo"] }
];

// Gerar automaticamente as 56 cartas dos Arcanos Menores
suitsInfo.forEach(suit => {
    ranksInfo.forEach(rank => {
        const rankFormatted = rank.num < 10 ? `0${rank.num}` : `${rank.num}`;
        const cardId = `${suit.code}_${rankFormatted}`;
        const fullName = `${rank.name} ${suit.name}`;
        const imagePath = `tarot-app/Cartas/${rank.slug}-de-${suit.slug}.jpg`;

        tarotData.push({
            id: cardId,
            name: fullName,
            category: suit.code,
            suit: suit.code,
            image: imagePath,
            keywords: [...rank.keyU, suit.name],
            upright: `O ${fullName} simboliza ${rank.keyU.join(" e ").toLowerCase()} no âmbito de ${suit.element}. Traz a mensagem de ${suit.uprightBase}`,
            reversed: `Invertido, o ${fullName} indica ${rank.keyR.join(" e ").toLowerCase()}, alertando contra ${suit.reversedBase}`
        });
    });
});

// ==========================================
// 2. CONFIGURAÇÃO DE TIRAGENS (SPREADS)
// ==========================================

const spreadsConfig = {
    daily: {
        name: "☀️ Carta do Dia",
        count: 1,
        layoutClass: "spread-daily",
        positions: [
            { id: 1, title: "☀️ Energia e Conselho do Dia" }
        ]
    },
    three: {
        name: "⏳ Passado, Presente e Futuro",
        count: 3,
        layoutClass: "spread-three",
        positions: [
            { id: 1, title: "⏳ Casa 1: O Passado" },
            { id: 2, title: "📍 Casa 2: O Presente" },
            { id: 3, title: "🔮 Casa 3: O Futuro" }
        ]
    },
    love: {
        name: "Tiragem do Amor",
        count: 3,
        layoutClass: "spread-three",
        positions: [
            { id: 1, title: "Casa 1: Sua Energia & Sentimentos" },
            { id: 2, title: "Casa 2: A Energia da Outra Pessoa" },
            { id: 3, title: "Casa 3: O Futuro & Destino da Relação" }
        ]
    },
    decision: {
        name: "Tiragem de Decisão",
        count: 4,
        layoutClass: "spread-four",
        positions: [
            { id: 1, title: "Casa 1: O Que Favorece (A Favor)" },
            { id: 2, title: "Casa 2: O Desafio (Em Contra)" },
            { id: 3, title: "Casa 3: O Caminho Recomendado" },
            { id: 4, title: "Casa 4: O Resultado Provável" }
        ]
    },
    celtic: {
        name: "Cruz Celta",
        count: 10,
        layoutClass: "spread-celtic",
        positions: [
            { id: 1, title: "Casa 1: O Momento Atual" },
            { id: 2, title: "Casa 2: O Obstáculo / Desafio" },
            { id: 3, title: "Casa 3: O Inconsciente / A Raiz" },
            { id: 4, title: "Casa 4: O Passado Recente" },
            { id: 5, title: "Casa 5: O Consciente / Aspirações" },
            { id: 6, title: "Casa 6: O Futuro Próximo" },
            { id: 7, title: "Casa 7: Sua Atitude / Autoimagem" },
            { id: 8, title: "Casa 8: O Ambiente / Influências Externas" },
            { id: 9, title: "Casa 9: Esperanças e Receios" },
            { id: 10, title: "Casa 10: O Desfecho / Resultado Final" }
        ]
    },
    yesno: {
        name: "Sim ou Não",
        count: 1,
        layoutClass: "spread-daily",
        positions: [
            { id: 1, title: "Veredito Oracular & Energia Central" }
        ]
    }
};

// ==========================================
// 3. ESTADO DA APLICAÇÃO & GERENCIAMENTO
// ==========================================

let currentDrawnCards = []; // Guarda as cartas sorteadas na mesa atual
let selectedReadingIndex = 0; // Índice da carta em foco no painel de interpretação
let currentQuestion = ""; // Pergunta ou intenção da tiragem ativa
let isSoundEnabled = true; // Controle de áudio
let audioCtx = null; // Contexto de áudio sintetizado Web Audio API

// ==========================================
// 4. INICIALIZAÇÃO & REGISTRO DE EVENTOS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initThemes();
    initAudio();
    initTabs();
    initToolbar();
    initReadingActions();
    initAIOracle();
    initJournal();
    initGlossary();
    initModal();
});

// --- SISTEMA DE NOTIFICAÇÃO TOAST ---
function showToast(message, icon = "✨") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span style="font-size: 1.2rem;">${icon}</span> <span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- TEMAS VISUAIS ALTERNATIVOS ---
function initThemes() {
    const themeSelect = document.getElementById("theme-select");
    const savedTheme = localStorage.getItem("tarot_theme") || "violet";
    
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (themeSelect) {
        themeSelect.value = savedTheme;
        themeSelect.addEventListener("change", (e) => {
            const newTheme = e.target.value;
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("tarot_theme", newTheme);
            
            const themeNames = { violet: "Místico Violeta", cosmic: "Escuridão Cósmica", solar: "Dourado Solar" };
            showToast(`Tema alterado para ${themeNames[newTheme] || newTheme}`, "🎨");
        });
    }
}

// --- EFEITOS SONOROS MÍSTICOS (WEB AUDIO API 100% OFFLINE) ---
function initAudio() {
    const btnSoundToggle = document.getElementById("btn-sound-toggle");
    
    const savedSound = localStorage.getItem("tarot_sound_enabled");
    isSoundEnabled = savedSound !== null ? savedSound === "true" : true;
    updateSoundIcon();

    if (btnSoundToggle) {
        btnSoundToggle.addEventListener("click", () => {
            isSoundEnabled = !isSoundEnabled;
            localStorage.setItem("tarot_sound_enabled", isSoundEnabled);
            updateSoundIcon();
            showToast(isSoundEnabled ? "Efeitos sonoros ativados" : "Efeitos sonoros silenciados", isSoundEnabled ? "🔊" : "🔇");
        });
    }
}

function updateSoundIcon() {
    const soundIcon = document.getElementById("sound-icon");
    if (soundIcon) {
        soundIcon.textContent = isSoundEnabled ? "🔊" : "🔇";
    }
}

function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            audioCtx = new AudioContextClass();
        }
    }
    if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    return audioCtx;
}

// Som de Embaralhar Cartas
function playShuffleSound() {
    if (!isSoundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const bufferSize = ctx.sampleRate * 0.35;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(900, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.35);
        filter.Q.value = 2.5;

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        noise.start();
    } catch (e) {
        console.warn("Áudio não suportado:", e);
    }
}

// Som de Virar Carta
function playFlipSound() {
    if (!isSoundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(160, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
        console.warn("Áudio não suportado:", e);
    }
}

// Som de Brilho Místico
function playShimmerSound() {
    if (!isSoundEnabled) return;
    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const freqs = [523.25, 659.25, 783.99, 1046.50];
        freqs.forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = "triangle";
            osc.frequency.value = f;

            const startTime = ctx.currentTime + i * 0.07;
            gain.gain.setValueAtTime(0.07, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.5);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(startTime);
            osc.stop(startTime + 0.5);
        });
    } catch (e) {
        console.warn("Áudio não suportado:", e);
    }
}

// --- NAVEGAÇÃO DE ABAS ---
function initTabs() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(`tab-${targetTab}`).classList.add("active");

            // Atualiza diário se a aba for ativada
            if (targetTab === "diario") {
                renderJournalList();
            }
        });
    });
}

// ==========================================
// 5. MESA DE TIRAGEM (EMBARALHAR E REVELAR)
// ==========================================

function initToolbar() {
    const btnDraw = document.getElementById("btn-draw");
    const btnRevealAll = document.getElementById("btn-reveal-all");

    btnDraw.addEventListener("click", drawCards);
    btnRevealAll.addEventListener("click", revealAllCards);
}

function drawCards() {
    playShuffleSound();

    const spreadType = document.getElementById("spread-select").value;
    const allowReversed = document.getElementById("allow-reversed").checked;
    const questionInput = document.getElementById("question-input");
    
    currentQuestion = questionInput ? questionInput.value.trim() : "";
    const config = spreadsConfig[spreadType];

    // Exibir/Ocultar Banner da Pergunta
    const questionBanner = document.getElementById("question-banner");
    const questionBannerText = document.getElementById("question-banner-text");
    
    if (currentQuestion) {
        questionBannerText.textContent = `"${currentQuestion}"`;
        questionBanner.classList.remove("hidden");
    } else {
        questionBanner.classList.add("hidden");
    }

    // Ocultar instrução inicial
    document.getElementById("desk-instruction").classList.add("hidden");
    document.getElementById("reading-panel").classList.add("hidden");
    document.getElementById("btn-reveal-all").removeAttribute("disabled");

    const btnAiToolbar = document.getElementById("btn-consult-ai-toolbar");
    if (btnAiToolbar) btnAiToolbar.removeAttribute("disabled");

    const aiCtaWrapper = document.getElementById("ai-oracle-cta-wrapper");
    if (aiCtaWrapper) aiCtaWrapper.classList.remove("hidden");

    // Copiar e embaralhar baralho (Fisher-Yates)
    const deck = [...tarotData];
    shuffleArray(deck);

    // Selecionar cartas para a tiragem
    currentDrawnCards = [];
    for (let i = 0; i < config.count; i++) {
        const cardData = deck[i];
        const isReversed = allowReversed ? Math.random() < 0.5 : false;
        
        currentDrawnCards.push({
            positionInfo: config.positions[i],
            card: cardData,
            isReversed: isReversed,
            revealed: false
        });
    }

    // Renderizar contêiner da mesa
    renderDesk(config);
}

function renderDesk(config) {
    const container = document.getElementById("cards-container");
    container.className = `cards-container ${config.layoutClass}`;
    container.innerHTML = "";

    if (config.layoutClass === "spread-celtic") {
        const mainCross = document.createElement("div");
        mainCross.className = "celtic-cross-main";

        const sideColumn = document.createElement("div");
        sideColumn.className = "celtic-cross-column";

        const slot12 = document.createElement("div"); slot12.className = "celtic-slot-1-2";
        const slot3  = document.createElement("div"); slot3.className = "celtic-slot-3";
        const slot4  = document.createElement("div"); slot4.className = "celtic-slot-4";
        const slot5  = document.createElement("div"); slot5.className = "celtic-slot-5";
        const slot6  = document.createElement("div"); slot6.className = "celtic-slot-6";

        currentDrawnCards.forEach((drawn, index) => {
            const cardEl = createCardElement(drawn, index);
            
            if (index === 0 || index === 1) slot12.appendChild(cardEl);
            else if (index === 2) slot3.appendChild(cardEl);
            else if (index === 3) slot4.appendChild(cardEl);
            else if (index === 4) slot5.appendChild(cardEl);
            else if (index === 5) slot6.appendChild(cardEl);
            else sideColumn.appendChild(cardEl);
        });

        mainCross.appendChild(slot5);
        mainCross.appendChild(slot4);
        mainCross.appendChild(slot12);
        mainCross.appendChild(slot6);
        mainCross.appendChild(slot3);

        container.appendChild(mainCross);
        container.appendChild(sideColumn);
    } else {
        currentDrawnCards.forEach((drawn, index) => {
            const cardEl = createCardElement(drawn, index);
            container.appendChild(cardEl);
        });
    }
}

function createCardElement(drawn, index) {
    const spreadType = document.getElementById("spread-select").value;
    const wrapper = document.createElement("div");
    wrapper.className = "card-wrapper";
    
    if (spreadType === "celtic" && index === 1) {
        wrapper.classList.add("celtic-crossed-card");
    }

    const badge = document.createElement("div");
    badge.className = "position-badge";
    badge.textContent = drawn.positionInfo.title;

    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-index", index);

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-back">
                <div class="card-back-pattern">
                    <svg class="card-back-svg" viewBox="0 0 100 150">
                        <rect x="5" y="5" width="90" height="140" rx="8" fill="none" stroke="#d4af37" stroke-width="2"/>
                        <circle cx="50" cy="75" r="28" fill="none" stroke="#d4af37" stroke-width="1.5"/>
                        <polygon points="50,40 60,75 50,110 40,75" fill="rgba(212,175,55,0.3)" stroke="#d4af37" stroke-width="1"/>
                        <circle cx="50" cy="75" r="8" fill="#d4af37"/>
                    </svg>
                </div>
            </div>
            <div class="card-front">
                <div class="card-img-container">
                    <img src="${drawn.card.image}" alt="${drawn.card.name}" class="card-img" onerror="handleImageError(this, '${drawn.card.name}', '${drawn.card.suit}')">
                    ${drawn.isReversed ? '<span class="card-reversed-badge">INVERTIDA</span>' : ''}
                    <div class="card-name-overlay">
                        <span class="card-name-text">${drawn.card.name}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    card.addEventListener("click", () => handleCardClick(index));

    wrapper.appendChild(badge);
    wrapper.appendChild(card);
    return wrapper;
}

function handleCardClick(index) {
    const drawn = currentDrawnCards[index];
    const cardEl = document.querySelector(`.card[data-index="${index}"]`);

    if (!drawn.revealed) {
        playFlipSound();
        drawn.revealed = true;
        cardEl.classList.add("revealed");
        if (drawn.isReversed) {
            cardEl.classList.add("is-reversed");
        }
    }

    selectedReadingIndex = index;
    updateReadingPanel();
}

function revealAllCards() {
    playShimmerSound();

    currentDrawnCards.forEach((drawn, index) => {
        if (!drawn.revealed) {
            setTimeout(() => {
                handleCardClick(index);

                if (index === currentDrawnCards.length - 1) {
                    setTimeout(() => {
                        selectedReadingIndex = 0;
                        updateReadingPanel();
                    }, 120);
                }
            }, index * 140);
        }
    });

    selectedReadingIndex = 0;
    updateReadingPanel();
}

// ==========================================
// 6. PAINEL DE LEITURA & EXPORTAÇÃO
// ==========================================

function initReadingActions() {
    const btnCopy = document.getElementById("btn-copy-summary");
    const btnSave = document.getElementById("btn-save-journal");

    if (btnCopy) btnCopy.addEventListener("click", copyReadingSummary);
    if (btnSave) btnSave.addEventListener("click", saveCurrentToJournal);
}

function copyReadingSummary() {
    if (currentDrawnCards.length === 0) return;

    const spreadType = document.getElementById("spread-select").value;
    const spreadName = spreadsConfig[spreadType].name;
    const dateStr = new Date().toLocaleString("pt-BR", { dateStyle: "long", timeStyle: "short" });

    let summaryText = `🔮 *TAROT MÍSTICO - RESUMO DA LEITURA*\n`;
    summaryText += `📅 Data: ${dateStr}\n`;
    summaryText += `📜 Tiragem: ${spreadName}\n`;
    if (currentQuestion) {
        summaryText += `💭 Pergunta: "${currentQuestion}"\n`;
    }
    summaryText += `----------------------------------------\n\n`;

    currentDrawnCards.forEach((drawn) => {
        const status = drawn.isReversed ? "(Invertida 🔄)" : "(Ereta ✨)";
        const meaning = drawn.isReversed ? drawn.card.reversed : drawn.card.upright;
        summaryText += `📌 ${drawn.positionInfo.title}:\n`;
        summaryText += `🃏 Carta: ${drawn.card.name} ${status}\n`;
        summaryText += `🔑 Palavras-chave: ${drawn.card.keywords.join(", ")}\n`;
        summaryText += `📖 Significado: ${meaning}\n\n`;
    });

    summaryText += `✨ Gerado pelo Tarot Místico`;

    navigator.clipboard.writeText(summaryText).then(() => {
        showToast("Resumo da leitura copiado!", "📋");
    }).catch(() => {
        showToast("Erro ao copiar resumo.", "⚠️");
    });
}

function saveCurrentToJournal(customNotes = "") {
    if (currentDrawnCards.length === 0) return;

    const spreadType = document.getElementById("spread-select").value;
    const spreadName = spreadsConfig[spreadType].name;

    const newEntry = {
        id: "entry_" + Date.now(),
        timestamp: Date.now(),
        dateFormatted: new Date().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }),
        spreadType: spreadType,
        spreadName: spreadName,
        question: currentQuestion,
        cards: currentDrawnCards.map(d => ({
            positionTitle: d.positionInfo.title,
            cardId: d.card.id,
            cardName: d.card.name,
            isReversed: d.isReversed,
            keywords: d.card.keywords,
            meaning: d.isReversed ? d.card.reversed : d.card.upright
        })),
        notes: typeof customNotes === "string" ? customNotes : ""
    };

    const entries = getJournalEntries();
    entries.unshift(newEntry);
    localStorage.setItem("tarot_journal_entries", JSON.stringify(entries));

    renderJournalStreakWidget();
    renderJournalList();

    showToast("Leitura salva no seu Diário Pessoal!", "💾");
}

// ==========================================
// 6.5. ORÁCULO DE IA (INTERPRETAÇÃO PROFUNDA)
// ==========================================

let currentAIReadingText = "";

function initAIOracle() {
    const btnToolbar = document.getElementById("btn-consult-ai-toolbar");
    const btnMain = document.getElementById("btn-consult-ai-main");
    const modal = document.getElementById("ai-modal");
    const btnClose = document.getElementById("btn-close-ai-modal");
    const overlay = document.getElementById("ai-modal-overlay");
    const btnCopyAI = document.getElementById("btn-copy-ai-reading");
    const btnSaveAI = document.getElementById("btn-save-ai-journal");
    const apiKeyInput = document.getElementById("gemini-api-key-input");
    const btnSaveKey = document.getElementById("btn-save-api-key");

    const savedKey = localStorage.getItem("tarot_gemini_api_key") || "";
    if (apiKeyInput && savedKey) {
        apiKeyInput.value = savedKey;
    }

    if (btnSaveKey && apiKeyInput) {
        btnSaveKey.addEventListener("click", () => {
            const keyVal = apiKeyInput.value.trim();
            localStorage.setItem("tarot_gemini_api_key", keyVal);
            showToast(keyVal ? "Chave Gemini salva no navegador!" : "Chave removida (usando Oráculo Local).", "🔑");
        });
    }

    if (btnToolbar) btnToolbar.addEventListener("click", consultAIOracle);
    if (btnMain) btnMain.addEventListener("click", consultAIOracle);

    const closeAIModal = () => {
        if (modal) modal.classList.add("hidden");
    };

    if (btnClose) btnClose.addEventListener("click", closeAIModal);
    if (overlay) overlay.addEventListener("click", closeAIModal);

    if (btnCopyAI) {
        btnCopyAI.addEventListener("click", () => {
            if (!currentAIReadingText) return;
            navigator.clipboard.writeText(currentAIReadingText).then(() => {
                showToast("Interpretação do Oráculo copiada!", "📋");
            });
        });
    }

    if (btnSaveAI) {
        btnSaveAI.addEventListener("click", () => {
            saveCurrentToJournal(currentAIReadingText);
            closeAIModal();
        });
    }
}

async function consultAIOracle() {
    if (currentDrawnCards.length === 0) {
        showToast("Tire as cartas primeiro antes de consultar o Oráculo!", "🃏");
        return;
    }

    // Revela todas as cartas automaticamente se alguma estiver virada
    const hasUnrevealed = currentDrawnCards.some(d => !d.revealed);
    if (hasUnrevealed) {
        revealAllCards();
    }

    const modal = document.getElementById("ai-modal");
    const loadingBox = document.getElementById("ai-loading-box");
    const responseContainer = document.getElementById("ai-response-container");
    const readingTextEl = document.getElementById("ai-reading-text");

    if (modal) modal.classList.remove("hidden");
    if (loadingBox) loadingBox.classList.remove("hidden");
    if (responseContainer) responseContainer.classList.add("hidden");

    const spreadType = document.getElementById("spread-select").value;
    const spreadName = spreadsConfig[spreadType].name;
    const questionInput = document.getElementById("question-input");
    currentQuestion = questionInput ? questionInput.value.trim() : currentQuestion;

    const apiKey = (localStorage.getItem("tarot_gemini_api_key") || "").trim();

    try {
        currentAIReadingText = await generateAIReading({
            question: currentQuestion,
            spreadName,
            cards: currentDrawnCards,
            apiKey
        });
    } catch (e) {
        currentAIReadingText = generateLocalMysticOracleSynthesis(currentQuestion, spreadName, currentDrawnCards);
    }

    if (readingTextEl) readingTextEl.textContent = currentAIReadingText;
    if (loadingBox) loadingBox.classList.add("hidden");
    if (responseContainer) responseContainer.classList.remove("hidden");
}

async function generateAIReading({ question, spreadName, cards, apiKey }) {
    if (apiKey && apiKey.length > 0) {
        const cardsDescription = cards.map((d, i) => {
            const orientation = d.isReversed ? "Invertida" : "Ereta (Normal)";
            return `${i + 1}. Posição: "${d.positionInfo.title}" -> Carta: ${d.card.name} (${orientation}) - Palavras-chave: ${d.card.keywords.join(", ")}`;
        }).join("\n");

        const prompt = `Você é um sábio oraculista e mestre de Tarot com vasta sabedoria hermética, psicológica (junguiana) e mística.
O consulente realizou uma tiragem de Tarot com as seguintes características:

- Tipo de Tiragem: ${spreadName}
- Intenção / Pergunta do Consulente: "${question || "Consulta oracular geral de autoconhecimento e orientação de destino"}"
- Cartas reveladas na mesa:
${cardsDescription}

Por favor, elabore uma leitura interpretativa rica, profunda, acolhedora e inspiradora:
1. Responda diretamente à intenção do consulente conectando os ensinamentos dessas cartas.
2. Analise como as energias das cartas dialogam e se influenciam mutuamente.
3. Entregue um conselho prático e oracular de síntese para o consulente seguir.

Seja poético, profundo e claro, usando formatação limpa e parágrafos bem espaçados.`;

        try {
            const response = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-goog-api-key": apiKey
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }]
                    })
                }
            );

            if (response.ok) {
                const data = await response.json();
                const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) return text;
            }
        } catch (err) {
            console.warn("Usando síntese oracular integrada:", err);
        }
    }

    // Simula breve tempo de sintonização mística para experiência fluida
    await new Promise(r => setTimeout(r, 650));
    return generateLocalMysticOracleSynthesis(question, spreadName, cards);
}

function generateLocalMysticOracleSynthesis(question, spreadName, drawnCards) {
    const majorCount = drawnCards.filter(d => d.card.category === "major").length;
    const reversedCount = drawnCards.filter(d => d.isReversed).length;

    let depth = "";
    if (majorCount >= Math.ceil(drawnCards.length / 2)) {
        depth = "Há uma forte presença de Arcanos Maiores nesta mesa, indicando forças arquetípicas profundas do destino e lições espirituais de grande relevância no seu momento atual.";
    } else {
        depth = "A tiragem é guiada pelas energias práticas dos Arcanos Menores, revelando que a chave da transformação reside em suas escolhas diárias, atitudes conscientes e na maneira como você conduz suas relações e projetos.";
    }

    let flow = "";
    if (reversedCount > 0) {
        flow = `Com ${reversedCount} ${reversedCount === 1 ? "carta invertida" : "cartas invertidas"}, o oráculo sinaliza processos internos de amadurecimento ou bloqueios sutis que pedem introspecção e cautela antes de agir impulsivamente.`;
    } else {
        flow = "Todas as energias fluem de forma direta e aberta (eretas), trazendo clareza, impulso favorável e caminhos desimpedidos para suas decisões.";
    }

    const cardSummaries = drawnCards.map(d => {
        const meaning = d.isReversed ? d.card.reversed : d.card.upright;
        const status = d.isReversed ? "Invertida 🔄" : "Ereta ✨";
        return `• ${d.positionInfo.title} — ${d.card.name} (${status}):\n  Palavras-chave: ${d.card.keywords.join(", ")}.\n  Mensagem: ${meaning}`;
    }).join("\n\n");

    const firstCard = drawnCards[0];
    const lastCard = drawnCards[drawnCards.length - 1];
    let dialogue = "";
    if (drawnCards.length > 1) {
        dialogue = `\n🔗 DIÁLOGO ENTRE OS ARCANOS:\nA jornada desta leitura inicia sob a vibração de ${firstCard.card.name} (${firstCard.positionInfo.title}) e converge para ${lastCard.card.name} (${lastCard.positionInfo.title}). Isso demonstra que, ao integrar o aprendizado de "${firstCard.card.keywords[0]}", você abre espaço para manifestar "${lastCard.card.keywords[0]}" com sabedoria e consciência.\n`;
    }

    return `🔮 SÍNTESE ORACULAR DA TIRAGEM (${spreadName.toUpperCase()})

${question ? `💭 Intenção Consultada: "${question}"\n\n` : ""}🌟 PANORAMA ENERGÉTICO:
${depth}
${flow}

📜 INTERPRETAÇÃO INTEGRADA DAS POSIÇÕES:
${cardSummaries}
${dialogue}
✨ CONSELHO FINAL DO ORÁCULO:
Confie na sabedoria das sincronicidades. As cartas mostram que você possui os recursos internos necessários para atravessar este ciclo. Acolha a intuição desperta por esta leitura e alinhe sua vontade com ações serenas e conscientes.`;
}

function getYesNoVerdict(drawn) {
    const card = drawn.card;
    const isReversed = drawn.isReversed;
    
    const yesCardIds = [
        "major_00", "major_01", "major_03", "major_06", "major_07", "major_08", "major_14", "major_17", "major_19", "major_21"
    ];
    const noCardIds = [
        "major_12", "major_13", "major_15", "major_16", "major_18"
    ];

    if (!isReversed && (yesCardIds.includes(card.id) || card.suit === "cups" || card.suit === "pentacles")) {
        return { 
            answer: "SIM ✨", 
            badgeClass: "verdict-yes", 
            icon: "✨", 
            text: "A energia desta carta traz aprovação fluida e bênçãos para sua pergunta. O universo indica caminhos abertos." 
        };
    }
    
    if (isReversed || noCardIds.includes(card.id) || card.suit === "swords") {
        return { 
            answer: "NÃO OU AGUARDE 🛑", 
            badgeClass: "verdict-no", 
            icon: "🛑", 
            text: "A energia sugere cautela, obstáculos ou desalinhamento temporário. É recomendável reavaliar antes de prosseguir." 
        };
    }

    return { 
        answer: "TALVEZ / DEPENDES DE VOCÊ ⚖️", 
        badgeClass: "verdict-maybe", 
        icon: "⚖️", 
        text: "O oráculo indica neutralidade. O desfecho depende diretamente das escolhas e da postura que você decidir tomar agora." 
    };
}

function renderHolisticSynthesis() {
    const synthesisContainer = document.getElementById("holistic-synthesis");
    if (!synthesisContainer) return;

    const revealedCards = currentDrawnCards.filter(d => d.revealed);
    if (revealedCards.length === 0) {
        synthesisContainer.innerHTML = "";
        return;
    }

    const totalDrawn = currentDrawnCards.length;
    const isAllRevealed = (revealedCards.length === totalDrawn);

    const majorCount = revealedCards.filter(d => d.card.category === "major").length;
    const uprightCount = revealedCards.filter(d => !d.isReversed).length;
    const reversedCount = revealedCards.length - uprightCount;

    const elementCounts = { fogo: 0, agua: 0, ar: 0, terra: 0 };
    revealedCards.forEach(d => {
        if (d.card.suit === "wands") elementCounts.fogo++;
        if (d.card.suit === "cups") elementCounts.agua++;
        if (d.card.suit === "swords") elementCounts.ar++;
        if (d.card.suit === "pentacles") elementCounts.terra++;
    });

    let dominantElement = "";
    let maxElemVal = 0;
    Object.keys(elementCounts).forEach(elem => {
        if (elementCounts[elem] > maxElemVal) {
            maxElemVal = elementCounts[elem];
            dominantElement = elem;
        }
    });

    const elementNames = {
        fogo: "🔥 Fogo (Ação, Paixão e Vontade)",
        agua: "🌊 Água (Emoções, Intuição e Afeto)",
        ar: "🌪️ Ar (Mente, Comunicação e Decisão)",
        terra: "🌱 Terra (Materialização, Saúde e Finanças)"
    };

    let synthesisText = "";

    if (majorCount >= Math.ceil(revealedCards.length / 2)) {
        synthesisText += `✨ <strong>Força do Destino:</strong> A maioria das cartas reveladas (${majorCount} de ${revealedCards.length}) são Arcanos Maiores, indicando uma fase de aprendizados profundos e mudanças trazidas pelo universo. `;
    } else {
        synthesisText += `🌱 <strong>Ações Práticas do Dia a Dia:</strong> Predominam Arcanos Menores, mostrando que o resultado depende de como você lida com suas tarefas diárias. `;
    }

    if (dominantElement && maxElemVal > 1) {
        synthesisText += `<br>💫 <strong>Elemento Dominante:</strong> ${elementNames[dominantElement]}. As energias deste elemento devem guiar suas atitudes principais. `;
    }

    if (reversedCount > uprightCount) {
        synthesisText += `<br>🔄 <strong>Foco na Reavaliação Interna:</strong> Há mais cartas invertidas do que eretas (${reversedCount} vs ${uprightCount}). O conselho do oráculo é desacelerar e olhar para dentro antes de tomar decisões externas.`;
    } else {
        synthesisText += `<br>🌟 <strong>Harmonia e Fluidez:</strong> A maioria das cartas está em posição ereta, indicando clareza e forças alinhadas para avançar.`;
    }

    synthesisContainer.innerHTML = `
        <div class="synthesis-card glass-panel">
            <div class="synthesis-header">
                <h3>🔮 Visão Geral & Síntese da Leitura ${isAllRevealed ? '✨' : '(Parcial)'}</h3>
            </div>
            <div class="synthesis-grid">
                <div class="synthesis-stat">
                    <span class="stat-label">Arcanos Maiores:</span>
                    <span class="stat-value">${majorCount} de ${totalDrawn}</span>
                </div>
                <div class="synthesis-stat">
                    <span class="stat-label">Equilíbrio da Mesa:</span>
                    <span class="stat-value">${uprightCount} Eretas / ${reversedCount} Invertidas</span>
                </div>
            </div>
            <div class="synthesis-body">
                <p>${synthesisText}</p>
            </div>
        </div>
    `;
}

function updateReadingPanel() {
    const panel = document.getElementById("reading-panel");
    panel.classList.remove("hidden");

    const tabsContainer = document.getElementById("reading-cards-tabs");
    tabsContainer.innerHTML = "";

    currentDrawnCards.forEach((drawn, i) => {
        const tabBtn = document.createElement("button");
        tabBtn.className = `mini-card-tab ${i === selectedReadingIndex ? 'active' : ''}`;
        tabBtn.innerHTML = `
            <span class="tab-num">${i + 1}</span>
            <span>${drawn.revealed ? drawn.card.name : 'Vire a carta'}</span>
        `;
        tabBtn.addEventListener("click", () => {
            selectedReadingIndex = i;
            updateReadingPanel();
        });
        tabsContainer.appendChild(tabBtn);
    });

    const activeDrawn = currentDrawnCards[selectedReadingIndex];
    const detailContainer = document.getElementById("active-card-details");

    document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
    const activeCardEl = document.querySelector(`.card[data-index="${selectedReadingIndex}"]`);
    if (activeCardEl) activeCardEl.classList.add("selected");

    const spreadType = document.getElementById("spread-select").value;

    if (!activeDrawn.revealed) {
        detailContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 20px;">
                <p style="color: var(--gold-light); font-family: var(--font-serif); font-size: 1.1rem;">
                    ✨ Clique na carta virada na mesa acima para revelá-la e ler sua interpretação.
                </p>
            </div>
        `;
        renderHolisticSynthesis();
        return;
    }

    const orientationText = activeDrawn.isReversed ? "Invertida (De ponta-cabeça)" : "Ereta (Normal)";
    const meaningText = activeDrawn.isReversed ? activeDrawn.card.reversed : activeDrawn.card.upright;
    const statusClass = activeDrawn.isReversed ? "invertida" : "ereta";

    let yesNoHTML = "";
    if (spreadType === "yesno") {
        const verdict = getYesNoVerdict(activeDrawn);
        yesNoHTML = `
            <div class="verdict-banner">
                <div class="verdict-badge ${verdict.badgeClass}">
                    <span>${verdict.icon}</span> ${verdict.answer}
                </div>
                <div style="font-size: 0.9rem; color: var(--text-light);">
                    ${verdict.text}
                </div>
            </div>
        `;
    }

    detailContainer.innerHTML = `
        <div class="detail-left">
            <div class="detail-img-wrapper ${activeDrawn.isReversed ? 'is-reversed' : ''}">
                <img src="${activeDrawn.card.image}" alt="${activeDrawn.card.name}" class="card-img" onerror="handleImageError(this, '${activeDrawn.card.name}', '${activeDrawn.card.suit}')">
            </div>
        </div>

        <div class="detail-right">
            ${yesNoHTML}
            <h3>${activeDrawn.card.name}</h3>
            <div class="detail-position-title">📌 ${activeDrawn.positionInfo.title}</div>
            
            <span class="detail-status-tag ${statusClass}">
                Orientação: ${orientationText}
            </span>

            <div class="detail-keywords">
                ${activeDrawn.card.keywords.map(kw => `<span class="keyword-tag">${kw}</span>`).join("")}
            </div>

            <div class="detail-text-box">
                <p>${meaningText}</p>
            </div>
        </div>
    `;

    renderHolisticSynthesis();
}

// ==========================================
// 7. MÓDULO DO DIÁRIO DE TAROT & LOCALSTORAGE
// ==========================================

function getJournalEntries() {
    try {
        return JSON.parse(localStorage.getItem("tarot_journal_entries")) || [];
    } catch (e) {
        return [];
    }
}

function renderJournalStreakWidget() {
    const widget = document.getElementById("journal-streak-widget");
    if (!widget) return;

    const entries = getJournalEntries();
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    const readingDates = new Set();
    entries.forEach(e => {
        if (e.timestamp) {
            const d = new Date(e.timestamp);
            const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            readingDates.add(dateKey);
        }
    });

    let streakCount = 0;
    let checkDate = new Date();
    let todayKey = `${checkDate.getFullYear()}-${String(checkDate.getMonth() + 1).padStart(2, '0')}-${String(checkDate.getDate()).padStart(2, '0')}`;
    
    if (!readingDates.has(todayKey)) {
        checkDate.setDate(checkDate.getDate() - 1);
    }

    while (true) {
        const key = `${checkDate.getFullYear()}-${String(checkDate.getMonth() + 1).padStart(2, '0')}-${String(checkDate.getDate()).padStart(2, '0')}`;
        if (readingDates.has(key)) {
            streakCount++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }

    const monthName = now.toLocaleString("pt-BR", { month: "long" });
    const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const todayDateNum = now.getDate();

    let calendarGridHTML = "";
    for (let day = 1; day <= daysInMonth; day++) {
        const key = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const hasReading = readingDates.has(key);
        const isToday = (day === todayDateNum);

        calendarGridHTML += `
            <div class="calendar-day-cell ${hasReading ? 'active-reading' : ''} ${isToday ? 'today-cell' : ''}" title="${hasReading ? 'Leitura realizada!' : 'Dia ' + day}">
                <span>${day}</span>
                ${hasReading ? '<span class="calendar-star">✨</span>' : ''}
            </div>
        `;
    }

    const hasDrawnToday = readingDates.has(todayKey);

    widget.innerHTML = `
        <div class="streak-header">
            <div class="streak-info">
                <div class="streak-flame-box">
                    ${streakCount > 0 ? '🔥' : '✨'}
                </div>
                <div class="streak-details">
                    <h3>Ofensiva Oracular: ${streakCount} ${streakCount === 1 ? 'Dia Seguido' : 'Dias Seguidos'}</h3>
                    <p>Total de ${entries.length} ${entries.length === 1 ? 'leitura registrada' : 'leituras registradas'} no seu diário.</p>
                </div>
            </div>
            <button id="btn-draw-daily-shortcut" class="btn btn-primary btn-sm">
                <span class="btn-icon">${hasDrawnToday ? '✨' : '☀️'}</span> ${hasDrawnToday ? 'Tirar Outra Carta' : '☀️ Carta do Dia de Hoje'}
            </button>
        </div>

        <div class="mystic-calendar-wrapper">
            <div class="mystic-calendar-title">📅 Acompanhamento de Leituras em ${capitalizedMonth}:</div>
            <div class="mystic-calendar-grid">
                ${calendarGridHTML}
            </div>
        </div>
    `;

    const btnShortcut = document.getElementById("btn-draw-daily-shortcut");
    if (btnShortcut) {
        btnShortcut.addEventListener("click", () => {
            const mesaTabBtn = document.querySelector('.tab-btn[data-tab="mesa"]');
            if (mesaTabBtn) mesaTabBtn.click();

            const spreadSelect = document.getElementById("spread-select");
            if (spreadSelect) spreadSelect.value = "daily";

            const btnDraw = document.getElementById("btn-draw");
            if (btnDraw) btnDraw.click();
        });
    }
}

function initJournal() {
    renderJournalStreakWidget();
    renderJournalList();

    const searchInput = document.getElementById("journal-search");
    const btnClearSearch = document.getElementById("btn-clear-journal-search");
    const btnExport = document.getElementById("btn-export-journal");
    const btnClearAll = document.getElementById("btn-clear-journal");

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = searchInput.value.trim().toLowerCase();
            if (btnClearSearch) btnClearSearch.classList.toggle("hidden", query === "");
            renderJournalList(query);
        });
    }

    if (btnClearSearch) {
        btnClearSearch.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            btnClearSearch.classList.add("hidden");
            renderJournalList();
        });
    }

    if (btnExport) {
        btnExport.addEventListener("click", exportAllJournal);
    }

    if (btnClearAll) {
        btnClearAll.addEventListener("click", () => {
            if (confirm("Tem certeza que deseja apagar TODO o seu histórico de leituras do diário?")) {
                localStorage.removeItem("tarot_journal_entries");
                renderJournalStreakWidget();
                renderJournalList();
                showToast("Diário limpo com sucesso.", "🗑️");
            }
        });
    }
}

function renderJournalList(query = "") {
    const listContainer = document.getElementById("journal-list");
    if (!listContainer) return;

    let entries = getJournalEntries();

    if (query) {
        entries = entries.filter(e => {
            const matchesQuestion = e.question && e.question.toLowerCase().includes(query);
            const matchesNotes = e.notes && e.notes.toLowerCase().includes(query);
            const matchesSpread = e.spreadName && e.spreadName.toLowerCase().includes(query);
            const matchesCards = e.cards && e.cards.some(c => c.cardName.toLowerCase().includes(query));
            return matchesQuestion || matchesNotes || matchesSpread || matchesCards;
        });
    }

    if (entries.length === 0) {
        listContainer.innerHTML = `
            <div class="glass-panel" style="padding: 40px; text-align: center; color: var(--text-muted);">
                <span style="font-size: 2.5rem; display: block; margin-bottom: 12px;">📖</span>
                <p style="font-size: 1.1rem; color: var(--gold-light);">Nenhuma leitura encontrada no diário.</p>
                <p style="font-size: 0.9rem; margin-top: 6px;">Faça uma tiragem na <strong>Mesa de Tiragem</strong> e clique em <strong>"Salvar no Diário"</strong>!</p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = "";

    entries.forEach(entry => {
        const cardEl = document.createElement("div");
        cardEl.className = "journal-card glass-panel";

        const cardsMiniHTML = entry.cards.map(c => `
            <div class="journal-mini-card ${c.isReversed ? 'is-reversed' : ''}">
                <span>${c.isReversed ? '🔄' : '✨'}</span>
                <span class="mini-card-name"><strong>${c.positionTitle}:</strong> ${c.cardName} ${c.isReversed ? '(Invertida)' : ''}</span>
            </div>
        `).join("");

        cardEl.innerHTML = `
            <div class="journal-card-header">
                <div class="journal-meta">
                    <span class="journal-date">📅 ${entry.dateFormatted}</span>
                    <span class="journal-spread-badge">${entry.spreadName}</span>
                </div>
                <div class="journal-actions">
                    <button class="btn btn-secondary btn-sm btn-copy-entry" data-id="${entry.id}" title="Copiar esta leitura">📋 Copiar</button>
                    <button class="btn btn-danger-outline btn-sm btn-delete-entry" data-id="${entry.id}" title="Excluir do diário">🗑️ Excluir</button>
                </div>
            </div>

            ${entry.question ? `<div class="journal-question">💭 "${entry.question}"</div>` : ''}

            <div class="journal-cards-summary">
                ${cardsMiniHTML}
            </div>

            <div class="journal-notes-section">
                <div class="journal-notes-title">✍️ Anotações & Intuições Pessoais:</div>
                <textarea class="journal-notes-input" data-id="${entry.id}" placeholder="Escreva aqui se o que a tiragem previu se concretizou no seu dia a dia...">${entry.notes || ''}</textarea>
            </div>
        `;

        const notesInput = cardEl.querySelector(".journal-notes-input");
        notesInput.addEventListener("change", (e) => {
            updateJournalNotes(entry.id, e.target.value);
        });

        const btnDelete = cardEl.querySelector(".btn-delete-entry");
        btnDelete.addEventListener("click", () => {
            deleteJournalEntry(entry.id);
        });

        const btnCopyEntry = cardEl.querySelector(".btn-copy-entry");
        btnCopyEntry.addEventListener("click", () => {
            copySingleJournalEntry(entry);
        });

        listContainer.appendChild(cardEl);
    });
}

function updateJournalNotes(entryId, newNotes) {
    const entries = getJournalEntries();
    const target = entries.find(e => e.id === entryId);
    if (target) {
        target.notes = newNotes;
        localStorage.setItem("tarot_journal_entries", JSON.stringify(entries));
        showToast("Anotação salva!", "✍️");
    }
}

function deleteJournalEntry(entryId) {
    let entries = getJournalEntries();
    entries = entries.filter(e => e.id !== entryId);
    localStorage.setItem("tarot_journal_entries", JSON.stringify(entries));
    renderJournalList();
    showToast("Registro excluído.", "🗑️");
}

function copySingleJournalEntry(entry) {
    let text = `🔮 *TAROT MÍSTICO - LEITURA DO DIÁRIO*\n`;
    text += `📅 Data: ${entry.dateFormatted}\n`;
    text += `📜 Tiragem: ${entry.spreadName}\n`;
    if (entry.question) text += `💭 Pergunta: "${entry.question}"\n`;
    text += `----------------------------------------\n\n`;

    entry.cards.forEach(c => {
        text += `📌 ${c.positionTitle}: ${c.cardName} ${c.isReversed ? '(Invertida)' : '(Ereta)'}\n`;
        text += `📖 ${c.meaning}\n\n`;
    });

    if (entry.notes) {
        text += `✍️ Anotações Pessoais:\n${entry.notes}\n`;
    }

    navigator.clipboard.writeText(text).then(() => {
        showToast("Leitura copiada!", "📋");
    });
}

function exportAllJournal() {
    const entries = getJournalEntries();
    if (entries.length === 0) {
        showToast("Seu diário está vazio.", "📖");
        return;
    }

    let fullText = `📖 === MEU DIÁRIO DE TAROT MÍSTICO ===\n\n`;

    entries.forEach((entry, idx) => {
        fullText += `--- LEITURA #${entries.length - idx} ---\n`;
        fullText += `Data: ${entry.dateFormatted}\n`;
        fullText += `Tiragem: ${entry.spreadName}\n`;
        if (entry.question) fullText += `Pergunta: "${entry.question}"\n`;
        fullText += `Cartas:\n`;
        entry.cards.forEach(c => {
            fullText += `  • ${c.positionTitle}: ${c.cardName} ${c.isReversed ? '[Invertida]' : '[Ereta]'}\n`;
        });
        if (entry.notes) {
            fullText += `Anotações: ${entry.notes}\n`;
        }
        fullText += `\n`;
    });

    navigator.clipboard.writeText(fullText).then(() => {
        showToast("Diário copiado!", "📥");
    });
}

// ==========================================
// 8. GLOSSÁRIO DE CARTAS & BUSCA INTELIGENTE
// ==========================================

function initGlossary() {
    renderGlossaryGrid(tarotData);

    const searchInput = document.getElementById("glossary-search");
    const btnClear = document.getElementById("btn-clear-search");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const topicPills = document.querySelectorAll(".topic-pill");

    let currentCategory = "all";

    function applyFilters() {
        const query = searchInput.value.toLowerCase().trim();
        btnClear.classList.toggle("hidden", query === "");

        const filtered = tarotData.filter(card => {
            const matchesCategory = (currentCategory === "all") || (card.category === currentCategory);
            
            // Busca ampla em nomes, palavras-chave, ereto e invertido!
            const matchesSearch = (card.name.toLowerCase().includes(query)) ||
                                  (card.keywords.some(k => k.toLowerCase().includes(query))) ||
                                  (card.upright.toLowerCase().includes(query)) ||
                                  (card.reversed.toLowerCase().includes(query));
                                  
            return matchesCategory && matchesSearch;
        });

        renderGlossaryGrid(filtered);
    }

    if (searchInput) searchInput.addEventListener("input", applyFilters);

    if (btnClear) {
        btnClear.addEventListener("click", () => {
            searchInput.value = "";
            topicPills.forEach(p => p.classList.remove("active"));
            applyFilters();
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentCategory = btn.getAttribute("data-category");
            applyFilters();
        });
    });

    // Filtro rápido por tópicos (tags)
    topicPills.forEach(pill => {
        pill.addEventListener("click", () => {
            const topic = pill.getAttribute("data-topic");
            const isAlreadyActive = pill.classList.contains("active");

            topicPills.forEach(p => p.classList.remove("active"));

            if (!isAlreadyActive) {
                pill.classList.add("active");
                if (searchInput) searchInput.value = topic;
            } else {
                if (searchInput) searchInput.value = "";
            }
            applyFilters();
        });
    });
}

function renderGlossaryGrid(cards) {
    const grid = document.getElementById("glossary-grid");
    if (!grid) return;
    
    grid.innerHTML = "";

    if (cards.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
                Nenhuma carta encontrada para a busca atual.
            </div>
        `;
        return;
    }

    cards.forEach(card => {
        const item = document.createElement("div");
        item.className = "glossary-card-item";
        item.innerHTML = `
            <div class="card-front">
                <div class="card-img-container">
                    <img src="${card.image}" alt="${card.name}" class="card-img" onerror="handleImageError(this, '${card.name}', '${card.suit}')">
                    <div class="card-name-overlay">
                        <span class="card-name-text">${card.name}</span>
                    </div>
                </div>
            </div>
            <div class="glossary-card-title">${card.name}</div>
        `;

        item.addEventListener("click", () => openCardModal(card));
        grid.appendChild(item);
    });
}

// ==========================================
// 9. MODAL DE DETALHES DA CARTA
// ==========================================

function initModal() {
    const modal = document.getElementById("card-modal");
    if (!modal) return;
    const closeBtn = document.getElementById("btn-close-modal");
    const overlay = modal.querySelector(".modal-overlay");

    const closeModal = () => modal.classList.add("hidden");

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);
}

function openCardModal(card) {
    const modal = document.getElementById("card-modal");
    const body = document.getElementById("modal-body");
    if (!modal || !body) return;

    body.innerHTML = `
        <div class="modal-card-detail">
            <div class="detail-left">
                <div class="detail-img-wrapper" style="width: 200px; height: 330px;">
                    <img src="${card.image}" alt="${card.name}" class="card-img" onerror="handleImageError(this, '${card.name}', '${card.suit}')">
                </div>
            </div>

            <div class="detail-right">
                <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--gold-light);">${card.name}</h3>
                
                <div class="detail-keywords" style="margin-top: 10px;">
                    ${card.keywords.map(kw => `<span class="keyword-tag">${kw}</span>`).join("")}
                </div>

                <div class="modal-card-meanings">
                    <div class="meaning-block">
                        <h4>✨ Significado Ereto (Normal)</h4>
                        <p>${card.upright}</p>
                    </div>

                    <div class="meaning-block reversed">
                        <h4>🔄 Significado Invertido</h4>
                        <p>${card.reversed}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
}

// ==========================================
// 10. GERADOR DE ILUSTRAÇÃO SVG FALLBACK
// ==========================================

function handleImageError(imgEl, cardName, suitCode) {
    const symbols = {
        major: "✨",
        wands: "♣",
        cups: "♥",
        swords: "♠",
        pentacles: "♦"
    };

    const symbol = symbols[suitCode] || "🔮";
    const container = imgEl.parentElement;

    const fallbackHTML = `
        <div class="card-svg-fallback">
            <div class="suit-icon">${symbol}</div>
            <div class="card-title-fallback">${cardName}</div>
        </div>
    `;

    imgEl.style.display = "none";
    container.insertAdjacentHTML("afterbegin", fallbackHTML);
}

// ==========================================
// 11. ALGORITMO DE EMBARALHAMENTO (FISHER-YATES)
// ==========================================

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { TAROT_CARDS, SPREADS } from './tarotData';
import { TarotCard, SpreadType, ThemeType } from './types';

const Header: React.FC = () => (
  <header className="py-8 border-b border-white text-center">
    <p className="text-sm tracking-widest uppercase mb-2 opacity-70">
      Criado por Juliana Guimarães - Autodescoberta e Transformação
    </p>
    <h1 className="text-4xl md:text-5xl font-serif-display tracking-tight mt-4">
      Tarô Terapêutico
    </h1>
  </header>
);

const LoadingState: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-20 space-y-6 animate-pulse">
    <div className="w-16 h-16 border-2 border-white border-t-transparent rounded-none animate-spin"></div>
    <div className="text-center space-y-2">
      <p className="text-sm uppercase tracking-[0.3em] font-light">Sintonizando com o Inconsciente...</p>
      <p className="text-[10px] text-white/40 italic">A sabedoria dos arquétipos está sendo tecida...</p>
    </div>
  </div>
);

const CardInterpretation: React.FC<{ 
  card: TarotCard; 
  position: string; 
  positionDesc: string; 
  interpretation: string;
}> = ({ card, position, positionDesc, interpretation }) => {
  return (
    <div className="mb-16 p-8 border border-white/20 bg-white/5 rounded-none animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white/50 mb-1">{position}</h3>
          <p className="text-[10px] italic text-white/30">{positionDesc}</p>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <h4 className="text-2xl font-serif-display text-white">{card.name}</h4>
          <span className="text-[10px] uppercase tracking-widest opacity-40">Arcano Maior • {card.myth}</span>
        </div>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <div className="text-lg leading-relaxed text-white/90 whitespace-pre-wrap font-light text-justify">
          {interpretation}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="opacity-40 hover:opacity-100 transition-opacity">
          <h5 className="text-[10px] uppercase font-bold mb-2">Base Mitológica</h5>
          <p className="text-xs italic">{card.therapeutic}</p>
        </div>
        <div className="opacity-40 hover:opacity-100 transition-opacity">
          <h5 className="text-[10px] uppercase font-bold mb-2">Essência do Arcano</h5>
          <p className="text-xs italic">{card.meaning}</p>
        </div>
      </div>
    </div>
  );
};

const SummarySection: React.FC<{ summary: string }> = ({ summary }) => (
  <div className="mt-12 p-10 bg-white text-black rounded-none border-4 border-double border-black shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] animate-in zoom-in-95 duration-500">
    <h3 className="text-xl font-serif-display uppercase tracking-widest mb-6 border-b border-black/20 pb-2">Síntese e Direcionamento</h3>
    <div className="text-lg leading-relaxed whitespace-pre-wrap font-medium">
      {summary}
    </div>
  </div>
);

function App() {
  const [view, setView] = useState<'home' | 'loading' | 'result'>('home');
  const [spreadType, setSpreadType] = useState<SpreadType>('day');
  const [theme, setTheme] = useState<ThemeType>('geral');
  const [question, setQuestion] = useState('');
  const [drawnCards, setDrawnCards] = useState<TarotCard[]>([]);
  const [aiInterpretations, setAiInterpretations] = useState<string[]>([]);
  const [summary, setSummary] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleDraw = async () => {
    setErrorMsg(null);
    setView('loading');
    
    try {
      // Inicia a API conforme as diretrizes estritas do sistema
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      
      const cardCount = SPREADS[spreadType].length;
      const shuffled = [...TAROT_CARDS].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, cardCount);
      setDrawnCards(selected);

      const cardsContext = selected.map((card, index) => ({
        posicao: SPREADS[spreadType][index].title,
        descricao_posicao: SPREADS[spreadType][index].description,
        carta: card.name,
        mito: card.myth,
        significado_base: card.meaning,
        foco_terapeutico: card.therapeutic
      }));

      const prompt = `Você é Juliana Guimarães, uma terapeuta e taróloga. 
Interpretando com tom terapêutico e profundo:
TEMA: ${theme}
PERGUNTA: ${question || "Consulta Geral"}
TIRAGEM: ${spreadType}
CARTAS: ${JSON.stringify(cardsContext)}

REQUISITOS:
1. Responda em JSON.
2. Cada carta deve ter uma interpretação de aproximadamente 150 palavras.
3. Chaves: "interpretacoes" (array de strings) e "sintese" (string).`;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              interpretacoes: { type: Type.ARRAY, items: { type: Type.STRING } },
              sintese: { type: Type.STRING }
            },
            required: ["interpretacoes", "sintese"]
          }
        }
      });

      const responseText = result.text;
      if (!responseText) throw new Error("A resposta da inteligência artificial veio vazia.");

      const data = JSON.parse(responseText);
      setAiInterpretations(data.interpretacoes || []);
      setSummary(data.sintese || '');
      setView('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error: any) {
      console.error("ERRO COMPLETO DA API:", error);
      let msg = "Houve um problema na conexão.";
      if (!process.env.API_KEY || process.env.API_KEY === "undefined") {
        msg += " A variável API_KEY parece estar vazia no ambiente.";
      } else {
        msg += " Verifique se sua chave no Netlify é válida ou se houve erro no processamento das cartas.";
      }
      setErrorMsg(msg);
      setView('home');
    }
  };

  const reset = () => {
    setView('home');
    setDrawnCards([]);
    setAiInterpretations([]);
    setSummary('');
    setQuestion('');
    setErrorMsg(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">
      <Header />

      {view === 'home' && (
        <main className="mt-12 space-y-12 animate-in fade-in duration-700">
          {errorMsg && (
            <div className="bg-red-900/20 border border-red-500/50 p-6 text-red-200 text-sm text-center font-light leading-relaxed">
              <i className="fas fa-exclamation-circle mr-2"></i> {errorMsg}
              <br/><span className="text-[10px] opacity-50 mt-2 block">Consulte o console do navegador para detalhes técnicos.</span>
            </div>
          )}

          <section className="text-center space-y-4">
            <h2 className="text-2xl font-serif-display uppercase tracking-widest">Sua Jornada de Autoconhecimento</h2>
            <p className="max-w-xl mx-auto text-white/60 leading-relaxed font-light italic">
              "O tarô não é um espelho do futuro, mas uma janela para o seu interior."
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(['day', 'three', 'celtic'] as SpreadType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSpreadType(type)}
                className={`p-6 border ${spreadType === type ? 'border-white bg-white/10' : 'border-white/10 hover:border-white/30'} transition-all text-center rounded-none group`}
              >
                <span className="block font-bold uppercase tracking-[0.2em] text-[10px]">
                  {type === 'day' ? 'Carta do Dia' : type === 'three' ? 'Tiragem Rápida' : 'Cruz Celta'}
                </span>
              </button>
            ))}
          </section>

          <section className="space-y-10 bg-white/[0.02] p-8 rounded-none border border-white/5">
            <div className="space-y-6">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40 text-center">Foco da Consulta</label>
              <div className="flex flex-wrap justify-center gap-4">
                {(['geral', 'saude', 'amor', 'dinheiro'] as ThemeType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`px-6 py-2 text-[10px] uppercase tracking-widest border ${theme === t ? 'bg-white text-black border-white' : 'border-white/20 text-white/40 hover:border-white/60'} transition-all rounded-none`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-white/40">Sua Intenção ou Pergunta</label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="O que sua alma busca compreender neste momento?"
                className="w-full bg-black/40 border border-white/10 p-6 rounded-none focus:outline-none focus:border-white/40 transition-colors h-40 resize-none text-lg font-light italic text-white/80"
              />
            </div>

            <div className="pt-6 text-center">
              <button
                onClick={handleDraw}
                className="px-16 py-5 bg-white text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-transparent hover:text-white border border-white transition-all transform active:scale-95 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
              >
                Sortear Cartas
              </button>
            </div>
          </section>
        </main>
      )}

      {view === 'loading' && <LoadingState />}

      {view === 'result' && (
        <main className="mt-12 animate-in slide-in-from-bottom-8 duration-1000">
          <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-10">
            <div className="text-center md:text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">Interpretação Terapêutica</p>
              <h2 className="text-3xl font-serif-display uppercase tracking-widest">
                {spreadType === 'day' ? 'O Conselho do Dia' : spreadType === 'three' ? 'Análise do Ciclo' : 'Jornada Cruz Celta'}
              </h2>
              {question && (
                <div className="mt-6 max-w-2xl bg-white/5 p-4 border-l-2 border-white/20 rounded-none">
                  <p className="text-white/50 italic text-sm">" {question} "</p>
                </div>
              )}
            </div>
            <button 
              onClick={reset}
              className="text-[10px] uppercase tracking-[0.2em] font-bold py-3 px-8 border border-white/20 hover:border-white transition-all rounded-none"
            >
              Nova Consulta
            </button>
          </div>

          <div className="space-y-8">
            {drawnCards.map((card, index) => (
              <CardInterpretation
                key={index}
                card={card}
                position={SPREADS[spreadType][index].title}
                positionDesc={SPREADS[spreadType][index].description}
                interpretation={aiInterpretations[index] || "Processando sabedoria..."}
              />
            ))}
          </div>

          {spreadType !== 'day' && summary && <SummarySection summary={summary} />}

          <div className="mt-20 text-center border-t border-white/10 pt-16">
            <button 
              onClick={reset}
              className="px-10 py-3 bg-transparent text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] hover:text-white border border-white/10 hover:border-white transition-all rounded-none"
            >
              Voltar ao Início
            </button>
          </div>
        </main>
      )}

      <footer className="mt-32 py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase">
          © Juliana Guimarães - Autodescoberta e Transformação
        </p>
        <p className="text-white/10 text-[8px] mt-2 uppercase tracking-[0.2em]">
          Este tarô é um instrumento de reflexão e não substitui aconselhamento profissional.
        </p>
      </footer>
    </div>
  );
}

export default App;

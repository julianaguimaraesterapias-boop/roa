
export type CardType = 'Major' | 'Cups' | 'Wands' | 'Swords' | 'Pentacles';

export interface TarotCard {
  id: number;
  name: string;
  arcana: CardType;
  myth?: string;
  meaning: string;
  therapeutic: string;
  themeMeanings?: {
    saude: string;
    amor: string;
    dinheiro: string;
  };
}

export type SpreadType = 'day' | 'three' | 'celtic';
export type ThemeType = 'geral' | 'saude' | 'amor' | 'dinheiro';

export interface SpreadPosition {
  title: string;
  description: string;
}

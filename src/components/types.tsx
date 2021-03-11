export interface GameProps {
  count: number;
  result: string;
  playerOneName: string | null;
  lang: string;
  gameSkin: string;
  setVolume: any;
  volume: number;
  gameMode: string;
  setGameWinner: any;
}

export interface LangMapProps {
  [key: string]: any;
}

export interface SettingProps extends React.HTMLAttributes<HTMLElement> {
  playerName: string;
  onNameChange: any;
  onSkinChange: any;
  gameSkin: string;
  onLangChange: any;
  gameLang: string;
  onModeChange: any;
  gameMode: string;
  isSettingOpen: boolean;
  setSettingOpen: any;
}

export interface ScoreProps {
  lang: string;
  isScoreOpen: boolean;
  setScoreOpen: any;
  gameWinner: string | null;
  setGameWinner: any;
}

export interface SoundsProps {
  lang: string;
  isSoundsOpen: boolean;
  setSoundsOpen: any;
  setSounds: any;
  setMusic: any;
}

export interface HelpProps {
  lang: string;
  isHelpOpen: boolean;
  setHelpOpen: any;
}

export interface AudioProps {
  url: string | any;
}

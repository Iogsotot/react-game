export interface GameProps {
  count: number;
  result: string;
  playerOneName: string | null;
  lang: string;
  gameSkin: string;
}

// export interface ModalProps {
//   roundResult: string;
//   endGameMsg: string;
//   myModalClass: string;
//   // setMyModalClassState: any;
//   // myModalClassState: any;
// }

export interface LangMapProps {
  [key: string]: any;
}

export interface SettingProps {
  playerName: string,
  onNameChange: any,
  onSkinChange: any,
  gameSkin: string,
  onLangChange: any,
  gameLang: string,
  onModeChange: any,
  gameMode: string,
}

export interface ScoreProps {
  lang: string,
}

export interface HelpProps {
  lang: string,
}
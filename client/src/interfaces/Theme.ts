export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  fontSizes: IFontSizes;
  fontWeights: IFontWeights;
  borderRadius: IBorderRadius;
  transition: string;
}

export interface IColors {
  white: string;
  black: string;
  primary: string;
  line: string;
  yellow: string;
  cultured: string;
  gray: string;
  brightGray: string;
  davyGray: string;
  darkGray: string;
  lightGreen: string;
  darkGreen: string;
}

export interface IFonts {
  nunito: string;
}

export interface IFontSizes {
  small: string;
  regular: string;
  medium: string;
  large: string;
  xLarge: string;
  xxLarge: string;
}

interface IFontWeights {
  thin: number;
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
}

interface IBorderRadius extends IFontSizes {
  circle: string;
}

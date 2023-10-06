export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  fontSizes: IFontSizes;
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

interface IFonts {
  primary: string;
}

export interface IFontSizes {
  small: string;
  regular: string;
  medium: string;
  large: string;
  xLarge: string;
  xxLarge: string;
}

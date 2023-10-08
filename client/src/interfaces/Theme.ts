export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  fontSizes: IFontSizes;
  borderRadius: IBorderRadius;
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

export interface IBorderRadius extends IFontSizes {
  circle: string;
}

import  styled, { css } from 'styled-components';
import { IHeadingStyledProps, HeadingType, IFontSizes } from '../../../interfaces';

const getFontSize = (type: HeadingType, fontSizes: IFontSizes) => {
  switch (type) {
    case 'h1': return fontSizes.xxLarge;
    case 'h2': return fontSizes.xLarge;
    case 'h3': return fontSizes.large;
    case 'h4': return fontSizes.medium;
    case 'h5': return fontSizes.regular;
    case 'h6': return fontSizes.small;
    default: return fontSizes.regular;
  }
}

const HeadingStyled = styled.div<IHeadingStyledProps>`
  ${({ theme, type, color, fontFamily, fontWeight, lineHeight, letterSpacing, textTransform, hoverColor }) => css`
    font-size: ${getFontSize(type, theme.fontSizes)};
    color: ${color ? theme.colors[color] : theme.colors.primary};
    font-family: ${fontFamily || theme.fonts.nunito};
    font-weight: ${fontWeight || 'normal'};
    line-height: ${lineHeight || 'normal'};
    letter-spacing: ${letterSpacing ? `${letterSpacing}px` : 0};
    text-transform: ${textTransform || 'none'};
    transition: ${hoverColor ? theme.transition : null};
  `}

  &:hover {
    color: ${({ theme, hoverColor }) => hoverColor ? theme.colors[hoverColor] : null};
  }
`;

export default HeadingStyled;

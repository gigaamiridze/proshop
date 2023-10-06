import { IHeadingProps } from '../interfaces';
import { HeadingStyled } from '../styles';

function Heading(props: IHeadingProps) {
  const { title, type, color, fontFamily, fontWeight, lineHeight, letterSpacing, textTransform } = props;

  return (
    <HeadingStyled 
      as={type}
      type={type}
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textTransform={textTransform}
    >
      {title}
    </HeadingStyled>
  )
}

export default Heading;
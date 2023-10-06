import styled, { css } from 'styled-components';
import { IFlexBoxProps } from '../../../interfaces';

const FlexBox = styled.div<IFlexBoxProps>`
  display: flex;
  ${({ flexDirection, alignItems, justifyContent }) => css`
    flex-direction: ${flexDirection ? flexDirection : 'row'};
    align-items: ${alignItems ? alignItems : 'stretch'};
    justify-content: ${justifyContent ? justifyContent : 'flex-start'};
  `}
`;

export default FlexBox;

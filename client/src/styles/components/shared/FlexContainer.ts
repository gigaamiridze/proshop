import styled, { css } from 'styled-components';
import { IFlexProps } from '../../../interfaces';

const FlexContainer = styled.div<IFlexProps>`
  display: flex;
  ${({ flexDirection, alignItems, justifyContent }) => css`
    flex-direction: ${flexDirection ? flexDirection : 'row'};
    align-items: ${alignItems ? alignItems : 'stretch'};
    justify-content: ${justifyContent ? justifyContent : 'flex-start'};
  `}
`;

export default FlexContainer;

import  styled, { css } from 'styled-components';
import FlexBox from '../shared/FlexBox';

const RightContent = styled(FlexBox)`
  a {
    ${({ theme }) => css`
      color: ${theme.colors.gray};
    `}
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding: 8px;
  }
`;

export default RightContent;

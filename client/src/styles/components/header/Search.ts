import styled, { css } from 'styled-components';
import FlexBox from '../shared/FlexBox';

export const SearchForm = styled(FlexBox)`
  height: 45px;
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.davyGray};
    font-family: ${theme.fonts.nunito};
    border-radius: ${theme.borderRadius.small};
  `}
  width: 205px;
  height: 100%;
  padding: 0 16px;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.davyGray};
  }
`;

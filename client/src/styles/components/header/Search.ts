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
    font-size: ${theme.fontSizes.regular};
    font-weight: ${theme.fontWeights.medium};
    border-radius: ${theme.borderRadius.small};
  `}
  width: 205px;
  height: 100%;
  padding: 0 16px;
  border: none;
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.davyGray};
  }
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.lightGreen};
    font-family: ${theme.fonts.nunito};
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.semiBold};
    border-radius: ${theme.borderRadius.small};
    border: 2px solid ${theme.colors.lightGreen};
    transition: ${theme.transition};
  `}
  height: 100%;
  background-color: transparent;
  padding: 0 8px;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  
  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.lightGreen};
      color: ${theme.colors.white};
    `}
  }
  
  &:focus {
    box-shadow: 0 0 0 3.3px ${({ theme }) => theme.colors.darkGreen};
  }
`;

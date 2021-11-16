import styled from 'styled-components';

export const Hamburguer = styled.div`
  color: red;
  cursor: pointer;
  font-size: 30px;

  @media screen and (min-width: 426px) {
    display: none;
  }
`;

export const StyledLink = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 425px) {
    display: flex;
  }
`;

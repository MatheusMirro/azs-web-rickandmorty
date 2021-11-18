import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 320px) {
    padding-top: 55%;
  }

  @media screen and (max-width: 425px) {
    padding-top: 50%;
  }
`;

export const IconWrapper = styled.span`
  transform: translateY(-40%);
`;

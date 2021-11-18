import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 425px) {
    padding-top: 25%;
  }

  @media screen and (max-width: 375px) {
    padding-top: 30%;
  }

  @media screen and (max-width: 320px) {
    padding-top: 35%;
  }
`;

export const IconWrapper = styled.span`
  transform: translateY(-40%);
`;

export const InputWrapper = styled.input`
  background: transparent;
`;

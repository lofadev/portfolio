import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 50px 0;
  background-color: rgba(42, 42, 42, 0.5);
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 46px;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-weight: bold;
  background: ${({ theme }) => `-webkit-linear-gradient(white, ${theme.base.primary})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

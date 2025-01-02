import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(42, 42, 42, 0.5);
  padding: 50px;
  border-radius: 8px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 46px;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-weight: bold;
  background: ${({ theme }) => `-webkit-linear-gradient(white, ${theme.base.primary})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Skill = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 40px;
`;

export const WrapperIcon = styled.span`
  display: inline-block;
  margin: 0 10px;

  svg {
    width: 70px;
    height: 70px;
  }
`;

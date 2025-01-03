import styled from 'styled-components';

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

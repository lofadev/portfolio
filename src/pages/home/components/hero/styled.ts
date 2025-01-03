import styled from 'styled-components';
import { Button } from '../../../../components/button';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background-color: rgba(42, 42, 42, 0.5);
  margin: 30px 0;
  padding: 100px 50px;
  border-radius: 8px;
`;

export const Desc = styled.h2`
  line-height: 1.5;
  padding-right: 40px;
  margin-bottom: 12px;
`;

export const ButtonStyled = styled(Button)`
  &.ant-btn-default:hover {
    path {
      fill: ${({ theme }) => theme.base.primary};
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
`;

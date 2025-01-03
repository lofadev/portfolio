import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)`
  font-weight: 500;

  &.ant-btn-default {
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 100%;
      top: 0;
      right: 0;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: inherit;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    &:hover::after {
      width: 100%;
      left: 0;
      right: auto;
    }
  }
`;

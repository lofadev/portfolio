import styled from 'styled-components';
import { AVATAR } from '~/assets';

export const Wrapper = styled.div`
  width: 250px;
  height: 300px;

  border-radius: 10px;
  background-image: url(${AVATAR});
  background-size: cover;

  position: relative;

  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);

  &:hover {
    transition-duration: 150ms;
    box-shadow: 0 5px 20px 5px #00000044;
  }
`;

export const Glow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 10px;

  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
`;

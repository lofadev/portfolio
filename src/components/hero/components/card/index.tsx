import { useRef } from 'react';
import { Glow, Wrapper } from './styled';

const CardAvatar = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const boundsRef = useRef<DOMRect | null>(null);

  const rotateToMouse = (e: MouseEvent) => {
    if (!boundsRef.current || !cardRef.current || !glowRef.current) return;

    const { clientX: mouseX, clientY: mouseY } = e;
    const { x, y, width, height } = boundsRef.current;

    const leftX = mouseX - x;
    const topY = mouseY - y;

    const center = {
      x: leftX - width / 2,
      y: topY - height / 2,
    };

    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + width / 2}px
        ${center.y * 2 + height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    boundsRef.current = cardRef.current.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
  };

  const handleMouseLeave = () => {
    document.removeEventListener('mousemove', rotateToMouse);
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
    if (glowRef.current) {
      glowRef.current.style.backgroundImage = '';
    }
  };

  return (
    <Wrapper ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Glow ref={glowRef} />
    </Wrapper>
  );
};

export default CardAvatar;

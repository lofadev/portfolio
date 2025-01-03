import { FC, PropsWithChildren } from 'react';
import { Title, Wrapper } from './styled';

interface IProps extends PropsWithChildren {
  title?: string;
}

const Section: FC<IProps> = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
};

export default Section;

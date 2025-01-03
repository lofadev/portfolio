import styled from 'styled-components';
import { Container } from '~/components';
import Hero from '~/pages/home/components/hero';
import Skills from './components/skill';

const Wrapper = styled.div``;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Hero />
        <Skills />
      </Wrapper>
    </Container>
  );
};

export default Home;

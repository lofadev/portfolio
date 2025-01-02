import { Flex } from 'antd';
import { TypeAnimation } from 'react-type-animation';
import { Download } from '~/assets';
import CardAvatar from './components/card';
import { ButtonStyled, Desc, Wrapper } from './styled';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <span style={{ fontSize: 36 }}>{'<>'}</span>
        <TypeAnimation
          sequence={["Hi! I'm An (LofA)", 1000, `I'm a Frontend Developer`, 1000]}
          wrapper="span"
          speed={30}
          style={{ fontSize: '36px', fontWeight: 'bold', display: 'inline-block' }}
          repeat={Infinity}
        />
        <span style={{ fontSize: 36 }}>{'</>'}</span>
        <Desc>
          Passionate Software Engineer with a focus on ReactJS development, dedicated to crafting elegant and
          user-friendly websites.
        </Desc>

        <Flex gap={10} style={{ marginTop: 20 }}>
          <ButtonStyled icon={<Download />} iconPosition="end">
            Download CV
          </ButtonStyled>
        </Flex>
      </div>
      <Flex justify="center">
        <CardAvatar />
      </Flex>
    </Wrapper>
  );
};

export default Hero;

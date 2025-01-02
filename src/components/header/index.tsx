import { Flex } from 'antd';
import styled from 'styled-components';
import { Container } from '../container';
import { menu } from './menu';

const HeaderStyled = styled.header`
  margin-top: 30px;
  padding: 0 50px;
  height: 66px;
  background-color: ${({ theme }) => theme.base.bgPrimary};
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.base.border};
  border-radius: 12px;
`;

const Menu = styled.ul`
  display: flex;
  gap: 32px;
`;

export const Header = () => {
  return (
    <Container>
      <Flex justify="center" align="center">
        <HeaderStyled>
          <Menu>
            {menu.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </Menu>
        </HeaderStyled>
      </Flex>
    </Container>
  );
};

import React from 'react';
import Tabs from '../Tabs';
import { Container, Header, Main } from './styles';


const Layout: React.FC = () => {  
  return (
    <Container>
      <Header>        
      </Header>

      <Main>
        <Tabs />
      </Main>
    </Container>
  );
};

export default Layout;

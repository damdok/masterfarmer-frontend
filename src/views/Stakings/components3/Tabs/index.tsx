import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, TabBottomline, Section } from './styles';

import Stakings from '../../Stakings';
import Subpage31 from '../../../Subpages/Subpage31';

const Tabs: React.FC = () => {
  const [nolock, setNolock] = useState('active');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'nolock':
        setNolock('active');
        break;      
      default:
        break;
    }
  }

  return (
    <Container>
      <TabLinks>
        <Button
          type="button"
          className={nolock}
          onClick={() => handleTabLink('nolock')}
        >
         
        </Button>        
      </TabLinks>
      <TabBottomline>        
      </TabBottomline>
      <TabContent>
        <Section className={nolock}>
          <Subpage31/>
        </Section>        
      </TabContent>
    </Container>
  );
};

export default Tabs;

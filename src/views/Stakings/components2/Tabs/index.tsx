import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, TabBottomline, Section } from './styles';

import Stakings from '../../Stakings';
import Subpage21 from '../../../Subpages/Subpage21';

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
          <Subpage21/>
        </Section>        
      </TabContent>
    </Container>
  );
};

export default Tabs;

import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, TabBottomline, Section } from './styles';

import Subpage11 from '../../../Subpages/Subpage11';
import Subpage13 from '../../../Subpages/Subpage13';
import Subpage14 from '../../../Subpages/Subpage14';
//

const Tabs: React.FC = () => {
    
  const [nolock, setNolock] = useState('active');
  const [day3, setDay3] = useState('hidden');
  const [day7, setDay7] = useState('hidden');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'nolock':
        setNolock('active');
        setDay3('hidden');
        setDay7('hidden');
        break;
      case 'day3':
        setNolock('hidden');
        setDay3('active');
        setDay7('hidden');
        break;
      case 'day7':
        setNolock('hidden');
        setDay3('hidden');
        setDay7('active');
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
          No Lock
        </Button>        
        <Button
          type="button"
          className={day3}
          onClick={() => handleTabLink('day3')}
        >
          3 Days
        </Button>
        <Button
          type="button"
          className={day7}
          onClick={() => handleTabLink('day7')}
        >
          7 Days
        </Button>
      </TabLinks>
      <TabBottomline>        
      </TabBottomline>
      <TabContent>
        <Section className={nolock}>                     
          <Subpage11/>                   
        </Section>       

        <Section className={day3}>
          <Subpage13/>
        </Section>

        <Section className={day7}>
          <Subpage14/>          
        </Section>
      </TabContent>
    </Container>
  );
};

export default Tabs;

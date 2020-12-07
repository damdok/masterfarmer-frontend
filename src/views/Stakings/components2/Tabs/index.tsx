import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, TabBottomline, Section } from './styles';

import Stakings from '../../Stakings';
import Subpage21 from '../../../Subpages/Subpage21';
import Subpage22 from '../../../Subpages/Subpage22';
import Subpage23 from '../../../Subpages/Subpage23';
import Subpage24 from '../../../Subpages/Subpage24';

const Tabs: React.FC = () => {
  const [nolock, setNolock] = useState('active');
  const [day1, setDay1] = useState('hidden');
  const [day3, setDay3] = useState('hidden');
  const [day7, setDay7] = useState('hidden');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'nolock':
        setNolock('active');
        setDay1('hidden');
        setDay3('hidden');
        setDay7('hidden');
        break;
      case 'day1':
        setNolock('hidden');
        setDay1('active');
        setDay3('hidden');
        setDay7('hidden');
        break;
      case 'day3':
        setNolock('hidden');
        setDay1('hidden');
        setDay3('active');
        setDay7('hidden');
        break;
      case 'day7':
        setNolock('hidden');
        setDay1('hidden');
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
          className={day1}
          onClick={() => handleTabLink('day1')}
        >
          1 Day
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
          <Subpage21/>
        </Section>

        <Section className={day1}>
          <Subpage22/>
        </Section>

        <Section className={day3}>
          <Subpage23/>
        </Section>

        <Section className={day7}>
          <Subpage24/>         
        </Section>
      </TabContent>
    </Container>
  );
};

export default Tabs;

import React, { useState } from 'react';
import { Container, TabLinks, Button, TabContent, TabBottomline, Section } from './styles';
import Balances from '../../../Infos/Balances';
import Stakings from '../../../Stakings/Stakings';
import Growth from '../../../Growth/Growth';
import Restaking from '../../../Restaking/Restaking';

const Tabs: React.FC = () => {
  const [staking, setStaking] = useState('hidden');
  const [restaking, setRestaking] = useState('hidden');
  const [growth, setGrowth] = useState('hidden');
  const [info, setInfo] = useState('active');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'staking':
        setStaking('active');
        setRestaking('hidden');
        setGrowth('hidden');
        setInfo('hidden');
        break;
      case 'restaking':
        setStaking('hidden');
        setRestaking('active');
        setGrowth('hidden');
        setInfo('hidden');
        break;
      case 'growth':
        setStaking('hidden');
        setRestaking('hidden');
        setGrowth('active');
        setInfo('hidden');
        break;
      case 'info':
        setStaking('hidden');
        setRestaking('hidden');
        setGrowth('hidden');
        setInfo('active');
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
          className={staking}
          onClick={() => handleTabLink('staking')}
        >
          Staking
        </Button>
        <Button
          type="button"
          className={restaking}
          onClick={() => handleTabLink('restaking')}
        >
          Re-Staking
        </Button>
        <Button
          type="button"
          className={growth}
          onClick={() => handleTabLink('growth')}
        >
          Growth
        </Button>
        <Button
          type="button"
          className={info}
          onClick={() => handleTabLink('info')}
        >
          Info
        </Button>
      </TabLinks>
      <TabBottomline>        
      </TabBottomline>
      <TabContent>
        <Section className={staking}>
          <Stakings />
        </Section>

        <Section className={restaking}>
          <Restaking />
        </Section>

        <Section className={growth}>
          <Growth />
        </Section>

        <Section className={info}>
          <Balances />
        </Section>
      </TabContent>
    </Container>
  );
};

export default Tabs;

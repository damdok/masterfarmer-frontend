import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, TabBottomline, Section, Footnote } from './styles';

import EthCrops from '../../../../components/EthCrops'
import UsdcCrops from '../../../../components/UsdcCrops'

import Subpage01 from '../../../Subpages/Subpage01';

import Layout1 from '../../components1/Layout';
import Layout2 from '../../components2/Layout';
import GlobalStyles from '../../../../styles/global';
import Spacer from '../../../../components/Spacer'



const Tabs: React.FC = () => {
  const [ethcrops, setEthCrops] = useState('active');
  const [cropsusdc, setCropsUsdc] = useState('hidden');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'ethcrops':
        setEthCrops('active');
        setCropsUsdc('hidden');        
        break;
      case 'cropsusdc':
        setEthCrops('hidden');
        setCropsUsdc('active');
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
          className={ethcrops}
          onClick={() => handleTabLink('ethcrops')}
        >
          <EthCrops/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={cropsusdc}
          onClick={() => handleTabLink('cropsusdc')}
        >
          <UsdcCrops/>
        </Button>
      </TabLinks>
      <TabContent>
        <Section className={ethcrops}>
          <Footnote>Farm your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnote>pools</Footnote>
          <Layout1/>
          <GlobalStyles/>
        </Section>

        <Section className={cropsusdc}>
          <Footnote>Farm your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnote>pools</Footnote>
          <Layout2/>
          <GlobalStyles/>
        </Section>
      </TabContent>
    </Container>
  );
};

export default Tabs;

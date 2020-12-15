import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, TabBottomline, Section, Footnote } from './styles';

import EthCrops from '../../../../components/EthCrops'
import UsdcCrops from '../../../../components/UsdcCrops'
import WbtcCrops from '../../../../components/WbtcCrops'
import SurfCrops from '../../../../components/SurfCrops'

import Subpage01 from '../../../Subpages/Subpage01';

import Layout1 from '../../components1/Layout';
import Layout2 from '../../components2/Layout';
import Layout3 from '../../components3/Layout';
import Layout4 from '../../components4/Layout';
import GlobalStyles from '../../../../styles/global';
import Spacer from '../../../../components/Spacer'



const Tabs: React.FC = () => {
  const [ethcrops, setEthCrops] = useState('active');
  const [cropsusdc, setCropsUsdc] = useState('hidden');
  const [cropswbtc, setCropsWbtc] = useState('hidden');
  const [cropssurf, setCropsSurf] = useState('hidden');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'ethcrops':
        setEthCrops('active');
        setCropsUsdc('hidden');
        setCropsWbtc('hidden');
        setCropsSurf('hidden');        
        break;
      case 'cropsusdc':
        setEthCrops('hidden');
        setCropsUsdc('active');
        setCropsWbtc('hidden');
        setCropsSurf('hidden');
        break; 
      case 'cropswbtc':
        setEthCrops('hidden');
        setCropsUsdc('hidden');
        setCropsWbtc('active');
        setCropsSurf('hidden');
        break;
      case 'cropssurf':
        setEthCrops('hidden');
        setCropsUsdc('hidden');
        setCropsWbtc('hidden');
        setCropsSurf('active');
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
        <Spacer/>
        <Button
          type="button"
          className={cropswbtc}
          onClick={() => handleTabLink('cropswbtc')}
        >
          <WbtcCrops/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={cropssurf}
          onClick={() => handleTabLink('cropssurf')}
        >
          <SurfCrops/>
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

        <Section className={cropswbtc}>
          <Footnote>Farm your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnote>pools</Footnote>
          <Layout3/>
          <GlobalStyles/>
        </Section>

        <Section className={cropssurf}>
          <Footnote>Farm your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnote>pools</Footnote>
          <Layout4/>
          <GlobalStyles/>
        </Section>
      </TabContent>
    </Container>
  );
};

export default Tabs;

import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, Footnotetitle, Section, Footnote } from './styles';

import EthCrops from '../../../../components/stakingsimgbtn/EthCrops'
import UsdcCrops from '../../../../components/stakingsimgbtn/UsdcCrops'
import WbtcCrops from '../../../../components/stakingsimgbtn/WbtcCrops'
import SurfCrops from '../../../../components/stakingsimgbtn/SurfCrops'
import MftCrops from '../../../../components/stakingsimgbtn/MftCrops'
import BadgerCrops from '../../../../components/stakingsimgbtn/BadgerCrops'
import YfiCrops from '../../../../components/stakingsimgbtn/YfiCrops'

import Subpage01 from '../../../Subpages/Subpage01';

import Layout1 from '../../../Subpages/Subpage11';
import Layout2 from '../../../Subpages/Subpage21';
import Layout3 from '../../../Subpages/Subpage31';
import Layout4 from '../../../Subpages/Subpage41';
import Layout5 from '../../../Subpages/Subpage51';
import Layout6 from '../../../Subpages/Subpage61';
import Layout7 from '../../../Subpages/Subpage71';

import GlobalStyles from '../../../../styles/global';
import Spacer from '../../../../components/Spacer'
import styled from 'styled-components'



const Tabs: React.FC = () => {
  const [ethcrops, setEthCrops] = useState('active');
  const [cropsusdc, setCropsUsdc] = useState('hidden');
  const [cropswbtc, setCropsWbtc] = useState('hidden');
  const [cropssurf, setCropsSurf] = useState('hidden');
  const [cropsmft, setCropsMft] = useState('hidden');
  const [cropsbadger, setCropsBadger] = useState('hidden');
  const [cropsyfi, setCropsYfi] = useState('hidden');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'ethcrops':
        setEthCrops('active');
        setCropsUsdc('hidden');
        setCropsWbtc('hidden');
        setCropsSurf('hidden');
        setCropsMft('hidden');
        setCropsBadger('hidden'); 
        setCropsYfi('hidden');      
        break;
      case 'cropsusdc':
        setEthCrops('hidden');
        setCropsUsdc('active');
        setCropsWbtc('hidden');
        setCropsSurf('hidden');
        setCropsMft('hidden');
        setCropsBadger('hidden');
        setCropsYfi('hidden');
        break; 
      case 'cropswbtc':
        setEthCrops('hidden');
        setCropsUsdc('hidden');
        setCropsWbtc('active');
        setCropsSurf('hidden');
        setCropsMft('hidden');
        setCropsBadger('hidden');
        setCropsYfi('hidden');
        break;
      case 'cropssurf':
        setEthCrops('hidden');
        setCropsUsdc('hidden');
        setCropsWbtc('hidden');
        setCropsSurf('active');
        setCropsMft('hidden');
        setCropsBadger('hidden');
        setCropsYfi('hidden');
        break;
      case 'cropsmft':
        setEthCrops('hidden');
        setCropsUsdc('hidden');
        setCropsWbtc('hidden');
        setCropsSurf('hidden');
        setCropsMft('active');
        setCropsBadger('hidden');
        setCropsYfi('hidden');
        break;
      case 'cropsbadger':
        setEthCrops('hidden');
        setCropsUsdc('hidden');
        setCropsWbtc('hidden');
        setCropsSurf('hidden');
        setCropsMft('hidden');
        setCropsBadger('active');
        setCropsYfi('hidden');
        break;
      case 'cropsyfi':
        setEthCrops('hidden');
        setCropsUsdc('hidden');
        setCropsWbtc('hidden');
        setCropsSurf('hidden');
        setCropsMft('hidden');
        setCropsBadger('hidden');
        setCropsYfi('active');
        break;
      default:
        break;
    }
  }

  return (
    <Container>      
      <TabLinks>
      <StyledNav>
        <FirstLink>
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
        </FirstLink>        
        <Spacer/>
        <SecondLink>       
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
        </SecondLink>
        <Spacer/>
        <ThirdLink>
        <Button
          type="button"
          className={cropsmft}
          onClick={() => handleTabLink('cropsmft')}
        >
          <MftCrops/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={cropsbadger}
          onClick={() => handleTabLink('cropsbadger')}
        >
          <BadgerCrops/>
        </Button>
        </ThirdLink>        
        <Spacer/>
        <FourthLink>
        <Button
          type="button"
          className={cropsyfi}
          onClick={() => handleTabLink('cropsyfi')}
        >
          <YfiCrops/>
        </Button>
        </FourthLink>
        </StyledNav>
      </TabLinks>
      <TabContent>
        <Section className={ethcrops}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>ETH/CROPS Pool</Footnotetitle>
          <Layout1/>
          <GlobalStyles/>
        </Section>

        <Section className={cropsusdc}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>USDC/CROPS Pool</Footnotetitle>
          <Layout2/>
          <GlobalStyles/>
        </Section>

        <Section className={cropswbtc}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>WBTC/CROPS Pool</Footnotetitle>
          <Layout3/>
          <GlobalStyles/>
        </Section>

        <Section className={cropssurf}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>SURF/CROPS Pool</Footnotetitle>
          <Layout4/>
          <GlobalStyles/>
        </Section>

        <Section className={cropsmft}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>MFT/CROPS Pool</Footnotetitle>
          <Layout5/>
          <GlobalStyles/>
        </Section>

        <Section className={cropsbadger}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>BADGER/CROPS Pool</Footnotetitle>
          <Layout6/>
          <GlobalStyles/>
        </Section>

        <Section className={cropsyfi}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>YFI/CROPS Pool</Footnotetitle>
          <Layout7/>
          <GlobalStyles/>
        </Section>
      </TabContent>
    </Container>
  );
};

const FirstLink = styled.div`
  display:flex;
  flex:30%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  }
`
const SecondLink = styled.div`
  display:flex;
  flex:30%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  } 
`
const ThirdLink = styled.div`
  display:flex;
  flex:30%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  } 
`
const FourthLink = styled.div`
  display:flex;
  flex:10%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  } 
`

const StyledNav = styled.div`
  align-items: center;
  display: flex;
  @media(max-width:860px){
    flex-direction: column;
  }
`

export default Tabs;

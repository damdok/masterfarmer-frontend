import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, Footnotetitle, Section, Footnote } from './styles';

import EthDrc from '../../../../components/restakingimgbtn/EthDrc'
import UsdcFarm from '../../../../components/restakingimgbtn/UsdcFarm'
import EthLua from '../../../../components/restakingimgbtn/EthLua'
import EthNice from '../../../../components/restakingimgbtn/EthNice'
import EthPickle from '../../../../components/restakingimgbtn/EthPickle'
import EthRot from '../../../../components/restakingimgbtn/EthRot'
import EthSushi from '../../../../components/restakingimgbtn/EthSushi'
import UsdcTomoe from '../../../../components/restakingimgbtn/UsdcTomoe'

import Subpage01 from '../../../Subpages/Subpage01';

import Layout1 from '../../../Subpages/Subpage13';
import Layout2 from '../../../Subpages/Subpage23';
import Layout3 from '../../../Subpages/Subpage33';
import Layout4 from '../../../Subpages/Subpage43';
import Layout5 from '../../../Subpages/Subpage53';
import Layout6 from '../../../Subpages/Subpage63';
import Layout7 from '../../../Subpages/Subpage73';
import Layout8 from '../../../Subpages/Subpage83';

import GlobalStyles from '../../../../styles/global';
import Spacer from '../../../../components/Spacer'
import styled from 'styled-components'



const Tabs: React.FC = () => {
  const [ethdrc, setEthDrc] = useState('active');
  const [usdcfarm, setUsdcFarm] = useState('hidden');
  const [ethlua, setEthLua] = useState('hidden');
  const [ethnice, setEthNice] = useState('hidden');
  const [ethpickle, setEthPickle] = useState('hidden');
  const [ethrot, setEthRot] = useState('hidden');
  const [ethsushi, setEthSushi] = useState('hidden');
  const [usdctomoe, setUsdcTomoe] = useState('hidden');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'ethdrc':
        setEthDrc('active');
        setUsdcFarm('hidden');
        setEthLua('hidden');
        setEthNice('hidden');
        setEthPickle('hidden');
        setEthRot('hidden'); 
        setEthSushi('hidden');
        setUsdcTomoe('hidden');    
        break;
      case 'usdcfarm':
        setEthDrc('hidden');
        setUsdcFarm('active');
        setEthLua('hidden');
        setEthNice('hidden');
        setEthPickle('hidden');
        setEthRot('hidden'); 
        setEthSushi('hidden');
        setUsdcTomoe('hidden');
        break; 
      case 'ethlua':
        setEthDrc('hidden');
        setUsdcFarm('hidden');
        setEthLua('active');
        setEthNice('hidden');
        setEthPickle('hidden');
        setEthRot('hidden'); 
        setEthSushi('hidden');
        setUsdcTomoe('hidden');
        break;
      case 'ethnice':
        setEthDrc('hidden');
        setUsdcFarm('hidden');
        setEthLua('hidden');
        setEthNice('active');
        setEthPickle('hidden');
        setEthRot('hidden'); 
        setEthSushi('hidden');
        setUsdcTomoe('hidden');
        break;
      case 'ethpickle':
        setEthDrc('hidden');
        setUsdcFarm('hidden');
        setEthLua('hidden');
        setEthNice('hidden');
        setEthPickle('active');
        setEthRot('hidden'); 
        setEthSushi('hidden');
        setUsdcTomoe('hidden');
        break;
      case 'ethrot':
        setEthDrc('hidden');
        setUsdcFarm('hidden');
        setEthLua('hidden');
        setEthNice('hidden');
        setEthPickle('hidden');
        setEthRot('active'); 
        setEthSushi('hidden');
        setUsdcTomoe('hidden');
        break;
      case 'ethsushi':
        setEthDrc('hidden');
        setUsdcFarm('hidden');
        setEthLua('hidden');
        setEthNice('hidden');
        setEthPickle('hidden');
        setEthRot('hidden'); 
        setEthSushi('active');
        setUsdcTomoe('hidden');
        break;
      case 'usdctomoe':
        setEthDrc('hidden');
        setUsdcFarm('hidden');
        setEthLua('hidden');
        setEthNice('hidden');
        setEthPickle('hidden');
        setEthRot('hidden'); 
        setEthSushi('hidden');
        setUsdcTomoe('active');
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
          className={ethdrc}
          onClick={() => handleTabLink('ethdrc')}
        >
          <EthDrc/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={usdcfarm}
          onClick={() => handleTabLink('usdcfarm')}
        >
          <UsdcFarm/>
        </Button>        
        <Spacer/>       
        <Button
          type="button"
          className={ethlua}
          onClick={() => handleTabLink('ethlua')}
        >
          <EthLua/>
        </Button>
        </FirstLink>        
        <Spacer/>
        <SecondLink>  
        <Button
          type="button"
          className={ethnice}
          onClick={() => handleTabLink('ethnice')}
        >
          <EthNice/>
        </Button>        
        <Spacer/>
        <Button
          type="button"
          className={ethpickle}
          onClick={() => handleTabLink('ethpickle')}
        >
          <EthPickle/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={ethrot}
          onClick={() => handleTabLink('ethrot')}
        >
          <EthRot/>
        </Button>
        </SecondLink>
        <Spacer/>
        <ThirdLink>
        <Button
          type="button"
          className={ethsushi}
          onClick={() => handleTabLink('ethsushi')}
        >
          <EthSushi/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={usdctomoe}
          onClick={() => handleTabLink('usdctomoe')}
        >
          <UsdcTomoe/>
        </Button>
        </ThirdLink>
        </StyledNav>
      </TabLinks>
      <TabContent>
        <Section className={ethdrc}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>DRC/ETH Pool</Footnotetitle>
          <Layout1/>
          <GlobalStyles/>
        </Section>

        <Section className={usdcfarm}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>FARM/USDC Pool</Footnotetitle>
          <Layout2/>
          <GlobalStyles/>
        </Section>

        <Section className={ethlua}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>LUA/ETH Pool</Footnotetitle>
          <Layout3/>
          <GlobalStyles/>
        </Section>

        <Section className={ethnice}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>NICE/ETH Pool</Footnotetitle>
          <Layout4/>
          <GlobalStyles/>
        </Section>

        <Section className={ethpickle}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>PICKLE/ETH Pool</Footnotetitle>
          <Layout5/>
          <GlobalStyles/>
        </Section>

        <Section className={ethrot}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>ROT/ETH Pool</Footnotetitle>
          <Layout6/>
          <GlobalStyles/>
        </Section>

        <Section className={ethsushi}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>SUSHI/ETH Pool</Footnotetitle>
          <Layout7/>
          <GlobalStyles/>
        </Section>

        <Section className={usdctomoe}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>TOMOE/USDC Pool</Footnotetitle>
          <Layout8/>
          <GlobalStyles/>
        </Section>
      </TabContent>
    </Container>
  );
};

const FirstLink = styled.div`
  display:flex;
  flex:35%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  }
`
const SecondLink = styled.div`
  display:flex;
  flex:35%;
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
const StyledNav = styled.div`
  align-items: center;
  display: flex;
  @media(max-width:860px){
    flex-direction: column;
  }
`

export default Tabs;

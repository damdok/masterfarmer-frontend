import React, { useState } from 'react';

import { Container, TabLinks, Button, TabContent, Footnotetitle, Section, Footnote } from './styles';

import DrcCrops from '../../../../components/growthimgbtn/DrcCrops'
import FarmCrops from '../../../../components/growthimgbtn/FarmCrops'
import LuaCrops from '../../../../components/growthimgbtn/LuaCrops'
import NiceCrops from '../../../../components/growthimgbtn/NiceCrops'
import PickleCrops from '../../../../components/growthimgbtn/PickleCrops'
import RotCrops from '../../../../components/growthimgbtn/RotCrops'
import SushiCrops from '../../../../components/growthimgbtn/SushiCrops'
import TomoeCrops from '../../../../components/growthimgbtn/TomoeCrops'

import Subpage01 from '../../../Subpages/Subpage01';

import Layout1 from '../../../Subpages/Subpage12';
import Layout2 from '../../../Subpages/Subpage22';
import Layout3 from '../../../Subpages/Subpage32';
import Layout4 from '../../../Subpages/Subpage42';
import Layout5 from '../../../Subpages/Subpage52';
import Layout6 from '../../../Subpages/Subpage62';
import Layout7 from '../../../Subpages/Subpage72';
import Layout8 from '../../../Subpages/Subpage82';

import GlobalStyles from '../../../../styles/global';
import Spacer from '../../../../components/Spacer'
import styled from 'styled-components'



const Tabs: React.FC = () => {
  const [cropdrc, setCropsDrc] = useState('active');
  const [cropfarm, setCropsFarm] = useState('hidden');
  const [croplua, setCropsLua] = useState('hidden');
  const [cropsnice, setCropsNice] = useState('hidden');
  const [cropspickle, setCropsPickle] = useState('hidden');
  const [cropsrot, setCropsRot] = useState('hidden');
  const [cropssushi, setCropsSushi] = useState('hidden');
  const [cropstomoe, setCropsTomoe] = useState('hidden');

  function handleTabLink(id: string): void {
    switch (id) {
      case 'cropdrc':
        setCropsDrc('active');
        setCropsFarm('hidden');
        setCropsLua('hidden');
        setCropsNice('hidden');
        setCropsPickle('hidden');
        setCropsRot('hidden'); 
        setCropsSushi('hidden');
        setCropsTomoe('hidden');    
        break;
      case 'cropfarm':
        setCropsDrc('hidden');
        setCropsFarm('active');
        setCropsLua('hidden');
        setCropsNice('hidden');
        setCropsPickle('hidden');
        setCropsRot('hidden'); 
        setCropsSushi('hidden');
        setCropsTomoe('hidden');
        break; 
      case 'croplua':
        setCropsDrc('hidden');
        setCropsFarm('hidden');
        setCropsLua('active');
        setCropsNice('hidden');
        setCropsPickle('hidden');
        setCropsRot('hidden'); 
        setCropsSushi('hidden');
        setCropsTomoe('hidden');
        break;
      case 'cropsnice':
        setCropsDrc('hidden');
        setCropsFarm('hidden');
        setCropsLua('hidden');
        setCropsNice('active');
        setCropsPickle('hidden');
        setCropsRot('hidden'); 
        setCropsSushi('hidden');
        setCropsTomoe('hidden');
        break;
      case 'cropspickle':
        setCropsDrc('hidden');
        setCropsFarm('hidden');
        setCropsLua('hidden');
        setCropsNice('hidden');
        setCropsPickle('active');
        setCropsRot('hidden'); 
        setCropsSushi('hidden');
        setCropsTomoe('hidden');
        break;
      case 'cropsrot':
        setCropsDrc('hidden');
        setCropsFarm('hidden');
        setCropsLua('hidden');
        setCropsNice('hidden');
        setCropsPickle('hidden');
        setCropsRot('active'); 
        setCropsSushi('hidden');
        setCropsTomoe('hidden');
        break;
      case 'cropssushi':
        setCropsDrc('hidden');
        setCropsFarm('hidden');
        setCropsLua('hidden');
        setCropsNice('hidden');
        setCropsPickle('hidden');
        setCropsRot('hidden'); 
        setCropsSushi('active');
        setCropsTomoe('hidden');
        break;
      case 'cropstomoe':
        setCropsDrc('hidden');
        setCropsFarm('hidden');
        setCropsLua('hidden');
        setCropsNice('hidden');
        setCropsPickle('hidden');
        setCropsRot('hidden'); 
        setCropsSushi('hidden');
        setCropsTomoe('active');
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
          className={cropdrc}
          onClick={() => handleTabLink('cropdrc')}
        >
          <DrcCrops/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={cropfarm}
          onClick={() => handleTabLink('cropfarm')}
        >
          <FarmCrops/>
        </Button>        
        <Spacer/>       
        <Button
          type="button"
          className={croplua}
          onClick={() => handleTabLink('croplua')}
        >
          <LuaCrops/>
        </Button>
        </FirstLink>        
        <Spacer/>
        <SecondLink>  
        <Button
          type="button"
          className={cropsnice}
          onClick={() => handleTabLink('cropsnice')}
        >
          <NiceCrops/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={cropspickle}
          onClick={() => handleTabLink('cropspickle')}
        >
          <PickleCrops/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={cropsrot}
          onClick={() => handleTabLink('cropsrot')}
        >
          <RotCrops/>
        </Button>
        </SecondLink>
        <Spacer/>
        <ThirdLink>
        <Button
          type="button"
          className={cropssushi}
          onClick={() => handleTabLink('cropssushi')}
        >
          <SushiCrops/>
        </Button>
        <Spacer/>
        <Button
          type="button"
          className={cropstomoe}
          onClick={() => handleTabLink('cropstomoe')}
        >
          <TomoeCrops/>
        </Button>
        </ThirdLink>
        </StyledNav>
      </TabLinks>
      <TabContent>
        <Section className={cropdrc}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>DRC/CROPS Pool</Footnotetitle>
          <Layout1/>
          <GlobalStyles/>
        </Section>

        <Section className={cropfarm}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>FARM/CROPS Pool</Footnotetitle>
          <Layout2/>
          <GlobalStyles/>
        </Section>

        <Section className={croplua}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>LUA/CROPS Pool</Footnotetitle>
          <Layout3/>
          <GlobalStyles/>
        </Section>

        <Section className={cropsnice}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>NICE/CROPS Pool</Footnotetitle>
          <Layout4/>
          <GlobalStyles/>
        </Section>

        <Section className={cropspickle}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>PICKLE/CROPS Pool</Footnotetitle>
          <Layout5/>
          <GlobalStyles/>
        </Section>

        <Section className={cropsrot}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>ROT/CROPS Pool</Footnotetitle>
          <Layout6/>
          <GlobalStyles/>
        </Section>

        <Section className={cropssushi}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>SUSHI/CROPS Pool</Footnotetitle>
          <Layout7/>
          <GlobalStyles/>
        </Section>

        <Section className={cropstomoe}>
          <Footnote>Plant your CROPS and grow more CROPS</Footnote>
          <Subpage01/>
          <Footnotetitle>TOMOE/CROPS Pool</Footnotetitle>
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

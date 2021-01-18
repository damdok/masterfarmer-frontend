import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={120} />}
        title="Welcome to Master Farmer"
        subtitle="Stake Uniswap LP Tokens to Claim CROPS"
      />
      <Container>
        <Spacer/>
        <Balances />
      </Container>
    </Page>
  )
}


export default Home

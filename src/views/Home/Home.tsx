import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
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
        <Balances />
      </Container>
      
      <Spacer size="lg" />
      
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home

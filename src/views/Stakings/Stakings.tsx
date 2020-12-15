import React from 'react'
import styled from 'styled-components'
import Layouttop from './topcomponents/Layout';
import GlobalStyles from '../../styles/global';

const Balances: React.FC = () => {

  return (
    <StyledbrWrapper>
      <Layouttop/>
      <GlobalStyles/>
    </StyledbrWrapper>
    
  )
}

const StyledbrWrapper = styled.div`
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    align-items: stretch;
  }
  padding-bottom: 10px;
`

export default Balances

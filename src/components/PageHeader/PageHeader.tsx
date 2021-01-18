import React from 'react'
import styled from 'styled-components'
import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledIcon>            
          {icon}
        </StyledIcon>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  ) 
}



const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 120px;
  height: 130px;
  line-height: 200px;
  text-align: center;
  width: 120px;
`

const StyledTitle = styled.h1`
  font-family: 'Arial-Rounded', sans-serif;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.grey[600]};
  font-family:  'Forte','Arial-Rounded', sans-serif;
  font-size: 25px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  margin-top:25px;
  text-align: center;
`

export default PageHeader

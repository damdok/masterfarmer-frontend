import React from 'react'
import styled from 'styled-components'

import Button from '../../../Button'
import Input, { InputProps } from '../../../Input'

interface AutoDepositTokenInputProps extends InputProps {
  
}

const AutoDepositTokenInput: React.FC<AutoDepositTokenInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <StyledTokenInput>      
      <Input
        endAdornment={(
          <StyledTokenAdornmentWrapper>
            <StyledTokenSymbol>ETH</StyledTokenSymbol>            
            <StyledSpacer />            
          </StyledTokenAdornmentWrapper>
        )}
        onChange={onChange}
        placeholder="0"
        value={value}
      />
    </StyledTokenInput>
  )
}

/*
  <div>
    <Button size="sm" text="Max" />
  </div>
*/

const StyledTokenInput = styled.div`

`

const StyledSpacer = styled.div`
  width: ${props => props.theme.spacing[3]}px;
`

const StyledTokenAdornmentWrapper = styled.div`
  align-items: center;
  display: flex;
`

const StyledTokenSymbol = styled.span`
  color: ${props => props.theme.color.grey[600]};
  font-weight: 700;
`

export default AutoDepositTokenInput
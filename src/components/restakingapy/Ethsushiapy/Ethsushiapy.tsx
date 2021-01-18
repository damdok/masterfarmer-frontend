import React from 'react'
import ethsushiapy from '../../../assets/img/ethsushiapy.png'

interface EthsushiapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Ethsushiapy: React.FC<EthsushiapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethsushiapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Ethsushiapy

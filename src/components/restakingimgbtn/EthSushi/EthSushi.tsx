import React from 'react'
import ethsushi from '../../../assets/img/22.png'

interface EthSushiProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const EthSushi: React.FC<EthSushiProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethsushi} height="100" style={{ marginTop: 0 }} />  
  
)

export default EthSushi

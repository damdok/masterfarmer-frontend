import React from 'react'
import ethnice from '../../../assets/img/19.png'

interface EthNiceProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const EthNice: React.FC<EthNiceProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethnice} height="100" style={{ marginTop: 0 }} />  
  
)

export default EthNice

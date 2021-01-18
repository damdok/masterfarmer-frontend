import React from 'react'
import ethrot from '../../../assets/img/21.png'

interface EthRotProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const EthRot: React.FC<EthRotProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethrot} height="100" style={{ marginTop: 0 }} />  
  
)

export default EthRot

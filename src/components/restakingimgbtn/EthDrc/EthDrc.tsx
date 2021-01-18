import React from 'react'
import ethdrc from '../../../assets/img/16.png'

interface EthdrcProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const EthDrc: React.FC<EthdrcProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethdrc} height="100" style={{ marginTop: 0 }} />  
  
)

export default EthDrc

import React from 'react'
import ethrotapy from '../../../assets/img/ethrotapy.png'

interface EthrotapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Ethrotapy: React.FC<EthrotapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethrotapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Ethrotapy

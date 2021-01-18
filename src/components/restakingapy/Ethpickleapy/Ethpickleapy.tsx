import React from 'react'
import ethpickleapy from '../../../assets/img/ethpickleapy.png'

interface EthpickleapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Ethpickleapy: React.FC<EthpickleapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethpickleapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Ethpickleapy

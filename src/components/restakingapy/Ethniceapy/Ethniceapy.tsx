import React from 'react'
import ethniceapy from '../../../assets/img/ethniceapy.png'

interface EthniceapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Ethsniceapy: React.FC<EthniceapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethniceapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Ethsniceapy

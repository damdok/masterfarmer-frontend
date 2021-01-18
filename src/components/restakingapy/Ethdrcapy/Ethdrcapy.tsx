import React from 'react'
import ethdrcapy from '../../../assets/img/ethdrcapy.png'

interface EthdrcapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Ethdrcapy: React.FC<EthdrcapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethdrcapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Ethdrcapy

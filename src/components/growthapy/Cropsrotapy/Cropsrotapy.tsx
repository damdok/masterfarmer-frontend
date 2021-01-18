import React from 'react'
import cropsrotapy from '../../../assets/img/cropsrotapy.png'

interface CropsrotapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Cropsrotapy: React.FC<CropsrotapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropsrotapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Cropsrotapy

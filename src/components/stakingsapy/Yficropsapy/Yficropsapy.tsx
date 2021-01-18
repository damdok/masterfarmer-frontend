import React from 'react'
import cropsyfiapy from '../../../assets/img/cropsyfiapy.png'

interface YficropsapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Yficropsapy: React.FC<YficropsapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropsyfiapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Yficropsapy

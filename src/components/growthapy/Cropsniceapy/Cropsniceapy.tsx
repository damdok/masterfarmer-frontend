import React from 'react'
import cropsniceapy from '../../../assets/img/cropsniceapy.png'

interface CropsniceapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Cropsniceapy: React.FC<CropsniceapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropsniceapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Cropsniceapy

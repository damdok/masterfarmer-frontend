import React from 'react'
import cropsdrcapy from '../../../assets/img/cropsdrcapy.png'

interface CropsdrcapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Cropsdrcapy: React.FC<CropsdrcapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropsdrcapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Cropsdrcapy

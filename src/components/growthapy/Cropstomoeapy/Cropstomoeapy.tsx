import React from 'react'
import cropstomoeapy from '../../../assets/img/cropstomoeapy.png'

interface CropstomoeapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Cropstomoeapy: React.FC<CropstomoeapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropstomoeapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Cropstomoeapy

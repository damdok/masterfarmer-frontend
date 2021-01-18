import React from 'react'
import cropspickleapy from '../../../assets/img/cropspickleapy.png'

interface CropspickleapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Cropspickleapy: React.FC<CropspickleapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropspickleapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Cropspickleapy

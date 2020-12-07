import React from 'react'
import cropsethapy from '../../assets/img/cropsethapy.png'

interface CropsethapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Cropsethapy: React.FC<CropsethapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropsethapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Cropsethapy

import React from 'react'
import tomoecrops from '../../../assets/img/15.png'

interface TomoeCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const TomoeCrops: React.FC<TomoeCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={tomoecrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default TomoeCrops

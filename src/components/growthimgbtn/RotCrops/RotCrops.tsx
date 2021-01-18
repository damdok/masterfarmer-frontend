import React from 'react'
import rotcrops from '../../../assets/img/13.png'

interface RotCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const RotCrops: React.FC<RotCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={rotcrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default RotCrops

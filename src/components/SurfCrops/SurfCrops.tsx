import React from 'react'
import surfcrops from '../../assets/img/4.png'

interface SurfCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const SurfCrops: React.FC<SurfCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={surfcrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default SurfCrops

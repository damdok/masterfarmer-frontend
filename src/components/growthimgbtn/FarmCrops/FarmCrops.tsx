import React from 'react'
import farmcrops from '../../../assets/img/9.png'

interface FarmCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const FarmCrops: React.FC<FarmCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={farmcrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default FarmCrops

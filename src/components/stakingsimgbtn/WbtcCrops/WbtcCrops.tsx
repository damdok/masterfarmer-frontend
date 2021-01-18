import React from 'react'
import wbtccrops from '../../../assets/img/3.png'

interface WbtcCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const WbtcCrops: React.FC<WbtcCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={wbtccrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default WbtcCrops

import React from 'react'
import sushicrops from '../../../assets/img/14.png'

interface SushiCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const SushiCrops: React.FC<SushiCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={sushicrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default SushiCrops

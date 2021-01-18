import React from 'react'
import yficrops from '../../../assets/img/7.png'

interface YfiCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const YfiCrops: React.FC<YfiCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={yficrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default YfiCrops

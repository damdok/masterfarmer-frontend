import React from 'react'
import usdccrops from '../../../assets/img/2.png'

interface UsdcCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const UsdcCrops: React.FC<UsdcCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={usdccrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default UsdcCrops

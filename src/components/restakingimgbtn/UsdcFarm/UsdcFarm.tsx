import React from 'react'
import usdcfarm from '../../../assets/img/17.png'

interface UsdcFarmProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const UsdcFarm: React.FC<UsdcFarmProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={usdcfarm} height="100" style={{ marginTop: 0 }} />  
  
)

export default UsdcFarm

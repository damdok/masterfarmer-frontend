import React from 'react'
import usdctomoe from '../../../assets/img/23.png'

interface UsdcTomoeProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const UsdcTomoe: React.FC<UsdcTomoeProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={usdctomoe} height="100" style={{ marginTop: 0 }} />  
  
)

export default UsdcTomoe

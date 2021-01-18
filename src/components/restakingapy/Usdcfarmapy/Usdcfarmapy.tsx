import React from 'react'
import usdcfarmapy from '../../../assets/img/usdcfarmapy.png'

interface UsdcfarmapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Usdcfarmapy: React.FC<UsdcfarmapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={usdcfarmapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Usdcfarmapy

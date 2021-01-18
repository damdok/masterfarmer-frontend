import React from 'react'
import usdctomoeapy from '../../../assets/img/usdctomoeapy.png'

interface UsdctomoeapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Usdcstomoeapy: React.FC<UsdctomoeapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={usdctomoeapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Usdcstomoeapy

import React from 'react'
import chef from '../../assets/img/chef1.png'

interface CropsIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const CropsIcon: React.FC<CropsIconProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={chef} height="32" style={{ marginTop: 0 }} />  
  
)

export default CropsIcon

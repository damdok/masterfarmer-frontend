import React from 'react'
import icon_image from '../../assets/img/icon_image.png'

interface ChangedCropsIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const ChangedCropsIcon: React.FC<ChangedCropsIconProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={icon_image} height="32" style={{ marginTop: 0 }} />  
  
)

export default ChangedCropsIcon

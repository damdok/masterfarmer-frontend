import React from 'react'
import picklecrops from '../../../assets/img/12.png'

interface PickleCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const PickleCrops: React.FC<PickleCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={picklecrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default PickleCrops

import React from 'react'
import badgercrops from '../../../assets/img/6.png'

interface BadgerCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const BadgerCrops: React.FC<BadgerCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={badgercrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default BadgerCrops

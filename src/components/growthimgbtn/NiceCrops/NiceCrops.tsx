import React from 'react'
import nicecrops from '../../../assets/img/11.png'

interface NiceCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const NiceCrops: React.FC<NiceCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={nicecrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default NiceCrops

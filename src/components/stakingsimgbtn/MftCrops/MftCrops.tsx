import React from 'react'
import mftcrops from '../../../assets/img/5.png'

interface MftCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const MftCrops: React.FC<MftCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={mftcrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default MftCrops

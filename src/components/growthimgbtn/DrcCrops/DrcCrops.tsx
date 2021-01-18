import React from 'react'
import drccrops from '../../../assets/img/8.png'

interface drcCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const DrcCrops: React.FC<drcCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={drccrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default DrcCrops

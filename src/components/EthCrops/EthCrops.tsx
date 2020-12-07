import React from 'react'
import ethcrops from '../../assets/img/1.png'

interface EthCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const EthCrops: React.FC<EthCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethcrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default EthCrops

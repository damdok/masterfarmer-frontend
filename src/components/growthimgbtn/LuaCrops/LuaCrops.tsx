import React from 'react'
import luacrops from '../../../assets/img/10.png'

interface LuaCropsProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const LuaCrops: React.FC<LuaCropsProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={luacrops} height="100" style={{ marginTop: 0 }} />  
  
)

export default LuaCrops

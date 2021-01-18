import React from 'react'
import ethlua from '../../../assets/img/18.png'

interface EthLuaProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const EthLua: React.FC<EthLuaProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethlua} height="100" style={{ marginTop: 0 }} />  
  
)

export default EthLua

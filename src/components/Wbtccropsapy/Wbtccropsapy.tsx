import React from 'react'
import cropswbtc from '../../assets/img/cropswbtc.png'

interface WbtccropsapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Wbtccropsapy: React.FC<WbtccropsapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropswbtc} height="300" style={{ marginTop: 0 }} />  
  
)

export default Wbtccropsapy

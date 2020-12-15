import React from 'react'
import cropssurfapy from '../../assets/img/cropssurfapy.png'

interface SurfcropsapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Surfcropsapy: React.FC<SurfcropsapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropssurfapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Surfcropsapy

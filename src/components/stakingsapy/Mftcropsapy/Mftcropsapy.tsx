import React from 'react'
import cropsmftapy from '../../../assets/img/cropsmftapy.png'

interface MftcropsapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Mftcropsapy: React.FC<MftcropsapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropsmftapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Mftcropsapy

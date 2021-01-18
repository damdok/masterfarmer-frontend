import React from 'react'
import cropsbadgerapy from '../../../assets/img/cropsbadgerapy.png'

interface BadgercropsapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Badgercropsapy: React.FC<BadgercropsapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropsbadgerapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Badgercropsapy

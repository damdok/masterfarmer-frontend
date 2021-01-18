import React from 'react'
import cropsluaapy from '../../../assets/img/cropsluaapy.png'

interface CropsethapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Cropsluaapy: React.FC<CropsethapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropsluaapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Cropsluaapy

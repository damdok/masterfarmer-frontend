import React from 'react'
import cropsfarmapy from '../../../assets/img/cropsfarmapy.png'

interface CropsfarmapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Cropsfarmapy: React.FC<CropsfarmapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropsfarmapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Cropsfarmapy

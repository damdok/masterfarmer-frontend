import React from 'react'
import cropssushiapy from '../../../assets/img/cropssushiapy.png'

interface CropssushiapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Cropssushiapy: React.FC<CropssushiapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={cropssushiapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Cropssushiapy

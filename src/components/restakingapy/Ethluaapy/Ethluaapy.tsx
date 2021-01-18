import React from 'react'
import ethluaapy from '../../../assets/img/ethluaapy.png'

interface EthluaapyProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const Ethluaapy: React.FC<EthluaapyProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethluaapy} height="300" style={{ marginTop: 0 }} />  
  
)

export default Ethluaapy

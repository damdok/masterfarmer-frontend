import React from 'react'
import ethpickle from '../../../assets/img/20.png'

interface EthPickleProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const EthPickle: React.FC<EthPickleProps> = ({ size = 36, v1, v2, v3 }) => (

  <img src={ethpickle} height="100" style={{ marginTop: 0 }} />  
  
)

export default EthPickle

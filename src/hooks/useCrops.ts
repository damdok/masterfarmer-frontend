import { useContext } from 'react'
import { Context } from '../contexts/CropsProvider'

const useCrops = () => {
  const { crops } = useContext(Context)
  return crops
}

export default useCrops
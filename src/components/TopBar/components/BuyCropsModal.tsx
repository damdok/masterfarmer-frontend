import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState, useEffect } from 'react'
import Button from '../../Button'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalTitle from '../../ModalTitle'
import AutoDepositTokenInput from './AutoDepositTokenInput'
import { getFullDisplayBalance } from '../../../utils/formatBalance'

interface BuyCropsModalProps extends ModalProps {  
  onConfirm: (amount: string) => void
}

const BuyCropsModal: React.FC<BuyCropsModalProps> = ({ 
  onConfirm,
  onDismiss,
}) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )
  
  return (
    <Modal>
      <ModalTitle text={`Buy CROPS using ETH`} />
      <AutoDepositTokenInput
        value={val}
        onChange={handleChange}
      />
      <ModalActions>
        <Button text="Cancel" variant="secondary" onClick={onDismiss} />
        <Button
          disabled={pendingTx || val == ""}
          text={pendingTx ? 'Pending Confirmation' : 'Confirm'}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val)
            setPendingTx(false)
            onDismiss()
          }}
        />
      </ModalActions>
    </Modal>
  )
}

export default BuyCropsModal

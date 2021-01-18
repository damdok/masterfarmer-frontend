import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState, useEffect } from 'react'
import Button from '../../../components/Button'
import Modal, { ModalProps } from '../../../components/Modal'
import ModalActions from '../../../components/ModalActions'
import ModalTitle from '../../../components/ModalTitle'
import AutoDepositTokenInput from '../../../components/AutoDepositTokenInput'
import { getFullDisplayBalance } from '../../../utils/formatBalance'

interface AutoDepositModalProps extends ModalProps {  
  onConfirm: (amount: string) => void
}

const AutoDepositModal: React.FC<AutoDepositModalProps> = ({ 
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
      <ModalTitle text={`Staking using ETH`} />
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

export default AutoDepositModal

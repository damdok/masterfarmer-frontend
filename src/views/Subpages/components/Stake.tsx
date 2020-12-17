import BigNumber from 'bignumber.js'
import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Contract } from 'web3-eth-contract'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import SmallCardIcon from '../../../components/SmallCardIcon'
import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'
import Value from '../../../components/Value'
import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useModal from '../../../hooks/useModal'
import useStake from '../../../hooks/useStake'
import useStakedBalance from '../../../hooks/useStakedBalance'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useUnstake from '../../../hooks/useUnstake'
import { getBalanceNumber } from '../../../utils/formatBalance'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import chef from '../../../assets/img/icon_image.png'

interface StakeProps {
  lpContract: Contract
  pid: number
  tokenName: string
}

const Stake: React.FC<StakeProps> = ({ lpContract, pid, tokenName }) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  
  const allowance = useAllowance(lpContract)
  const { onApprove } = useApprove(lpContract)
  const tokenBalance = useTokenBalance(lpContract.options.address)
  const stakedBalance = useStakedBalance(pid)
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  const [onPresentDeposit] = useModal(
    <DepositModal
      pid={pid}
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
    />,
  )  

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
      pid = {pid}
    />,
  )

  const handleApprove = useCallback(async () => {

    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {        
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }

  }, [onApprove, setRequestedApproval])

  const [timeStatus, setTimeStatus] = useState(true)

  useEffect(() => {
    getTimeStatus()
  }, [])

  const calculateTimeLeft = () => {
    var date = new Date();
    var dt = date.getTime() / 1000;
    var delay_date = 0;

    if (pid === 1 || pid === 5)
      delay_date = 24*3600*1000;
    else if (pid === 2 || pid === 6)
      delay_date = 3 * 24 * 3600 * 1000;
    else if (pid === 3 || pid === 7)
      delay_date = 7 * 24 * 3600 * 1000;
    const localStorageTime = localStorage.getItem('myValueInLocalStorage' + pid)
    var difference = delay_date - Math.round(dt - Number(localStorageTime))* 1000;
    // difference = 0

    if (difference > 0) {
      return true;
    } else {
      return false;
    }
  }

  const getTimeStatus = () => {
    setTimeStatus(!stakedBalance.eq(new BigNumber(0)) && calculateTimeLeft());
  }
 

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <SmallCardIcon><img src={chef} height="32" style={{ marginTop: 0 }} /> </SmallCardIcon>
            <Value value={getBalanceNumber(stakedBalance)} />
            <Label text={`${tokenName} Staked`} />
            <Label1>(0.83ETH+14.5CROPS)</Label1>          
          </StyledCardHeader>
          <StyledCardActions>
            {!allowance.toNumber() ? (
              <Button
                disabled={requestedApproval}
                onClick={handleApprove}
                text={`Approve ${tokenName}`}
              />
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0))}
                  text="Unstake"
                  onClick={onPresentWithdraw}
                />
                <Spacer/>
                <Button 
                  disabled={calculateTimeLeft()}
                  text="Stake"
                  onClick={onPresentDeposit}>
                </Button>
              </>
            )}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}  

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[4]}px;
  width: 100%;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const Label1 = styled.div` 
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 15px;
  font-weight: 600;
  margin-top: ${(props) => props.theme.spacing[3]}px;
`

export default Stake

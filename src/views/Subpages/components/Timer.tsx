import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

interface TimerComponentProps {
  pid: number
  remaintime: string
}

const TimerComponent: React.FC<TimerComponentProps> = ({ pid, remaintime }) => {
  
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
    else if (pid === 999)
      delay_date = 6 * 3600 * 1000;

    var difference = delay_date - Math.round(dt - Number(remaintime))* 1000;
    // difference = 0;

    //console.log("difference = ", difference );
    
    let timeLeft = {
      days:0,
      hours:0,
      minutes:0,
      seconds :0
    };

    if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());  
    }, 1000);
  
    return () => clearTimeout(timer);
  });

  return (
    <React.Fragment>      
      {pid === 999 ? (
        <StyledCardHeader>
        You can Decay in
        </StyledCardHeader>
      ) : (
        <StyledCardHeader>
        You can Stake and Unstake after
        </StyledCardHeader>
      )}
      <StyledTimeArea>
        <StyledDiv>
          <StyledTimeSpan>
            {timeLeft.days}  
          </StyledTimeSpan>
      
          <StyledText>
            days
          </StyledText>
        </StyledDiv>  

        <StyledDiv>
          <StyledTimeSpan>
            {timeLeft.hours}  
          </StyledTimeSpan>          
          <StyledText>
            hours
          </StyledText>
        </StyledDiv>

        <StyledDiv>
          <StyledTimeSpan>
            {timeLeft.minutes}  
          </StyledTimeSpan>
          <StyledText>
            minutes
          </StyledText>
        </StyledDiv>

        <StyledDiv>
          <StyledTimeSpan>
            {timeLeft.seconds}  
          </StyledTimeSpan>          
          <StyledText>
            seconds
          </StyledText>
        </StyledDiv>        
      </StyledTimeArea>
      {pid === 999 ? (<StyledCardHeader></StyledCardHeader>) : (
      <StyledCardHeader>
     	If more stakes are added timer is reset
      </StyledCardHeader>
      )}
    </React.Fragment>
  )
}

const StyledTimeArea = styled.div`
 font-family: sans-serif;
  color: #fff;
  display: inline-block;
  font-weight: 100;
  text-align: center;
  font-size: 30px;
  color:#5b3926;
`
const StyledTimeSpan = styled.span`
  padding: 15px;
  border-radius: 3px;
  background: #80ad51;
  display: inline-block;
`

const StyledText = styled.div`
  padding-top: 5px;
  font-size: 16px;
  color:#5b3926;
`

const StyledDiv = styled.div`
    display: inline-block;
    padding-left:10px;
    padding-top:10px;
    margin-left:10px;
    margin-right:10px;
`
const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size:22px;
  color:#5b3926;
`

export default TimerComponent

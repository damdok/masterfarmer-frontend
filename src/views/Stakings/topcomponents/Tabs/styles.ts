import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

export const TabLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  width:100%;
`;

export const TabBottomline = styled.hr`  
  margin-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const Button = styled.button`
  //color: var(--black);
  color: #228B22;
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  padding: 1px;
  outline: none;
  cursor: pointer;

  position: relative;

  &:after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;

    height: 5px;
    width: 0%;

    background-color: var(--primary);
    transition: 0.4s;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const tabContentUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
  }
`;

export const TabContent = styled.div`
  > section {
    animation: ${tabContentUp} 1s;
  }
`;

export const Section = styled.section`
  display: none;

  &.active {
    display: block;
    width:100%;    
  }
`;

export const Footnote = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  font-size: 25px;
  padding: 8px 20px;
  margin-top: 20px;
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.color.grey[900]};  
`

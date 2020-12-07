import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

export const TabLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
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
  padding: 16px;
  outline: none;
  cursor: pointer;

  position: relative;

  &:after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;

    height: 2px;
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
  width:100%;
`;

export const Section = styled.section`
  display: none;

  &.active {
    display: block;
  }
`;

import React from 'react'
import styled from 'styled-components';

const Link = styled.a`
    cursor: pointer;
    font-size:40px;
    font-weight: 500;
    background-color: #6b487985;
    position: fixed;
    top: 50%;
    right: 0%;
    border: 2px solid red;
    padding: 5px;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
    margin-right: 10px;
    z-index: 1;
`;

export const HireMe = () => {
  return (
    <Link href='/contact'>Connect</Link>
  )
}

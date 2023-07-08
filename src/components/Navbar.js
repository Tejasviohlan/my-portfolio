import React from 'react'
import styled from 'styled-components'
//import { HireMe } from './HireMe';
import { ProfilePicture } from './ProfilePicture';

const Container = styled.div`

`;

const Link = styled.a`
  font-size:20px;
  font-weight:500;
  font-style: italic;
  text-decoration: none;
  color: #fffdd0;
  margin: 20px;
  margin-top: 10px;
`;

const Wrapper = styled.div`
    font-size: 10px;
    width: 100%;
    font-weight: 500;
    padding: 5px;
    height: 60px;
    background-color: #100F10;
    position: relative;
    display: flex;
    justify-content: space-between;
  
`;

const NavBarElements = styled.div`
  margin-top: 1%;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <ProfilePicture />
            <NavBarElements>
              <Link href='#Home' >Home</Link>
              <Link href='#Experiences' >Experiences</Link>
              <Link href='#Projects' >Projects</Link>
              <Link href='#About' >About</Link>
              {/* <Link href='#Hobbies' >Hobbies</Link> */}
            </NavBarElements>
        </Wrapper>
        {/* <HireMe /> */}

    </Container>
  )
}

export default Navbar
import React,{useState, useEffect, useRef} from 'react'
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
  color: white;
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

const HamLines = styled.div`
    position: absolute;
    display: none;
    flex-direction: column;
    right: 10px;
    margin-top: 1.5%;
    cursor: pointer;

    @media only screen and (max-width: 800px) {
          display: flex ;
          top: 2vh;;
      }

    @media only screen and (max-width: 400px) {
        display: flex ;
        top: 2vh;
        position: fixed;
    }
`;

const Line = styled.div`
    display: none;
    border-top: 5px solid white;
    height: 10px;
    width: 40px;

    @media only screen and (max-width: 800px) {
    
        display: flex;
      }
`;

const NavBarElements = styled.div`

  @media only screen and (max-width: 800px) {
    
        display: flex;
        visibility: hidden;
        flex-direction: column;
        position: relative;
        z-index: 1;
  }

  @media only screen and (min-width: 800px) {
        display: flex;
        align-items: center;
        visibility: visible !important;
        transform: none !important;
        transition: none !important;
        z-index: 1;
        
  }
`

const NavBarElementsWrapper = styled.div`

  @media only screen and (max-width: 800px) {
    
        display: flex;
        flex-direction: column;
        position: relative;
        background: #100F10;
        z-index: 1;
  }
`

const Navbar = () => {

  const WrapperHead = useRef();
  const LineHead = useRef();
  const [open,setOpen] = useState(false);

  useEffect(() => {
    if(open){
      WrapperHead.current.style.visibility='visible';
      WrapperHead.current.style.transform='translateY(60px)';
      WrapperHead.current.style.transition='transform 0.5s ease-in-out';

      LineHead.current.style.transform='rotate(15deg)'
    }
    else{
      WrapperHead.current.style.visibility='hidden';
      WrapperHead.current.style.transform='none';
      WrapperHead.current.style.transition='none';
      LineHead.current.style.transform='none';
    };
  },[open]);

  return (
    <Container>
        <Wrapper>
            <ProfilePicture />
            <NavBarElements ref={WrapperHead}>
              <NavBarElementsWrapper>
                <Link href='#Home' >Home</Link>
                <Link href='#Experiences' >Experiences</Link>
                <Link href='#Projects' >Projects</Link>
                <Link href='#About' >About</Link>
                {/* <Link href='#Hobbies' >Hobbies</Link> */}
              </NavBarElementsWrapper>
            </NavBarElements>
        </Wrapper>
        <HamLines onClick={() => setOpen(!open)}>
              <span> <Line ref={LineHead}/> </span>
              <span> <Line/> </span>
              <span> <Line/> </span>
        </HamLines>  

    </Container>
  )
}

export default Navbar
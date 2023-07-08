import React from 'react'
import Navbar from './Navbar';
import About from './About';
import styled from 'styled-components';
import coderImage from '../data/images/tech2.jpg';
import { Experiences } from './Experiences';
import { Projects } from './Projects';
import { Skills } from './Skills';

const Wrapper = styled.div`
  margin-right: 10%;
  margin-left: 10%;
`;

const EmptyDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-image: url(${coderImage});
    background-size: cover;
    height: 400px;
    z-index: -1;
`;

export const Home = () => {
  return (
    <>
    <Navbar />
    <Wrapper>
        <EmptyDiv />
        <Experiences />
        <Projects />
        <Skills />
        <About />
    </Wrapper>
    </>
  )
}

export default Home;
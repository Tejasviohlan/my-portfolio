import React from 'react'
import Navbar from './Navbar';
import About from './About';
import styled from 'styled-components';
import coderImage from '../data/images/tech2.jpg';
import { Experiences } from './Experiences';
import { Projects } from './Projects';
import { Skills } from './Skills';

const Container = styled.div`
  min-width: 400px;
`;

const Wrapper = styled.div`
  margin-right: 10%;
  margin-left: 10%;
`;

const EmptyDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-image: url(${coderImage});
    background-size: contain;
    height: 400px;
    z-index: -1;
`;

export const Home = () => {
  return (
    <Container>
    <Navbar />
    <Wrapper>
        <EmptyDiv />
        <Experiences />
        <Projects />
        <Skills />
        <About />
    </Wrapper>
    </Container>
  )
}

export default Home;
import React from 'react';
import { projects } from '../data/ProjectsData';
import styled from 'styled-components';


const Wrapper = styled.div`
  padding : 8px;
  font-weight : 700;

`;


const Text = styled.p`
  font-weight : 500;
  font-size : 20px;
  margin : 20px 20px 20px 0px;
  display : flex;
  justify-content: space-between;
  
`;

const TsWrapper = styled.p`
  display : flex;
  justify-content: space-between;
  background-color: lightgray;
  
`;

const H1 = styled.h1`
  text-align : center;
  margin : 0px;
  padding : 5px;
`;

const H2 = styled.h2`
  margin : 0px;
`;

export const Projects = () => {
  return (
    <Wrapper id="Projects">
      <H1>PROJECTS</H1>
      {projects.map((project) => 
        <React.Fragment key={project.id}>
          <TsWrapper><H2>{project.title}</H2> <H2>Tech : {project.subtitle}</H2></TsWrapper>
          <Text>{project.description}</Text>
        
        </React.Fragment>
      )}
    </Wrapper>
  )
}

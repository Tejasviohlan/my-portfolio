import React from 'react'
import styled from 'styled-components';
import { experiences } from '../data/ExperienceData';

// const gradient = keyframes`
//   to{
//       0% {
//           background-position: 0% 0%;
//       }
//       50% {
//           background-position: 100% 100%;
//       }
//       100% {
//           background-position: 0% 0%;
//       }
//   }
// `;

// const wave = keyframes`
//   to{
//     2% {
//         transform: translateX(1);
//     }

//     25% {
//         transform: translateX(-25%);
//     }

//     50% {
//         transform: translateX(-50%);
//     }

//     75% {
//         transform: translateX(-25%);
//     }

//     100% {
//         transform: translateX(1);
//     }
// `;

const Wrapper = styled.div`
  padding : 8px;
  font-weight : 700;
  

`;


const Text = styled.p`
  font-weight : 500;
  font-size : 20px;
  margin : 20px 20px 20px 20px;
  display : flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    font-size: 80%;
  }

  @media only screen and (max-width: 980px) {
    font-size: 100%;
  }
  
`;

const DateFromat = styled.p`
  font-weight : 500;
  font-size : 20px;
  margin-top : 0px;
  display : flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    font-size: 50%;
  }

  @media only screen and (max-width: 980px) {
    font-size: 80%;
  }
  
`;

const ProjectsWrapper = styled.div`
  padding-top : 15px;
  display : flex;
  flex-direction: row;

  @media only screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  text-align : center;
  margin : 0px;
  padding : 5px;
`;

const H2 = styled.h2`
  padding-bottom : 10px;
  padding-top : 20px;
  margin : 0px;
  display : flex;
  justify-content: space-between;
  background-clip: content-box;
  background-color: lightgray;

  @media only screen and (max-width: 480px) {
    font-size: 80%;
  }

`;

const H3 = styled.h3`
  text-align : center;
  margin : 0px;
  margin-bottom : 18px;

  @media only screen and (max-width: 480px) {
    font-size: 80%;
  }

`;

const Project = styled.div`
  padding : 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  // &:hover,
  // &:focus {
  //   height: 100%;
  //   width: 100%;
  //   transform: scale(1.5);
  //   background-color: red;
  // }
`;

export const Experiences = () => {
  return (
    <Wrapper id="Experiences">
      <H1>EXPERIENCES</H1>
     {experiences.map((experience) => 
      <React.Fragment key={experience.id}>
        <H2 >{experience.companyName} &nbsp; ({experience.location}) <div>FINTECH</div></H2>
        <DateFromat>From : {experience.from}   &nbsp; &nbsp;  To : {experience.to} &nbsp; &nbsp; ({experience.role}) <div>Tech Stack : {experience.techStack}</div></DateFromat>
        <ProjectsWrapper>
          {experience.projects.map((project)=>
            <React.Fragment key={project.id}>
            
                <Project>
                  <H3>{project.name}</H3>
                  <Text>{project.description}</Text>
                </Project>
        
            </React.Fragment>
          )}
      </ProjectsWrapper>
        
      </React.Fragment>
     )}
    </Wrapper>
  )
}

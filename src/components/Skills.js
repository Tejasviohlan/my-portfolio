import React from 'react';
import { skills } from '../data/SkillsData';
import styled from 'styled-components';

const SkillWrapper = styled.div`
  padding : 18px;
  font-weight : 700;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

const SkillStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexBox = styled.div`
  display: flex;
`;

const H2 = styled.h1`
  padding-bottom : 10px;
  padding-top : 20px;
  margin : 0px;

`;

const H1 = styled.h1`
  text-align : center;
  margin : 0px;
  padding : 5px;
`;

const Scale = styled.div`
  border-radius: 5px 20px 5px;
  background: ${(props) => props.rating >= props.defaultRating ? "green" : "lightgrey"};;
  width: 25px;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
`;


export const Skills = () => {
  return (
    <>
    <H1>SKILLS</H1>
      <SkillWrapper >
      {Object.keys(skills).map((keyName, i) =>(
        <SkillStyle >
          <H2>{keyName} </H2> 
          <FlexBox>
            <Scale rating={skills[keyName]} defaultRating='1'>1</Scale>
            <Scale rating={skills[keyName]} defaultRating='2'>2</Scale>
            <Scale rating={skills[keyName]} defaultRating='3'>3</Scale>  
            <Scale rating={skills[keyName]} defaultRating='4'>4</Scale>  
            <Scale rating={skills[keyName]} defaultRating='5'>5</Scale>  
            <Scale rating={skills[keyName]} defaultRating='6'>6</Scale>  
            <Scale rating={skills[keyName]} defaultRating='7'>7</Scale>  
            <Scale rating={skills[keyName]} defaultRating='8'>8</Scale>  
            <Scale rating={skills[keyName]} defaultRating='9'>9</Scale>  
            <Scale rating={skills[keyName]} defaultRating='10'>10</Scale>  
          </FlexBox>
        </SkillStyle>
      ))}
    </SkillWrapper>
    </>
  )
}

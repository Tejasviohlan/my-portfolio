import React from 'react'
import styled from 'styled-components';
import BGWL from '../static/images/BG-WALL.webp'
import BKTW from '../static/images/bktw.png'
import VOLB from '../static/images/volb.png'
import HAND from '../static/images/hand.png'


const Container = styled.div`
  
`;

const Wrapper = styled.div`
  display : flex;
  width: 100%;
  height: 100%;
  //background-image: url(${BGWL});
  
`;

const H1 = styled.h1`
  text-align : center;
  margin : 0px;
  padding : 8px;
`;

const Sports = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  margin-top: 50px;
  font-size: 20px;

  @media only screen and (max-width: 780px) {
    font-size: 12px;
  }
`;

const AboutContentWrapper = styled.div`
  position: absolute;
  width: 79%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 480px) {
    font-size: 3vh;
  }


`;
const Automobile = styled.div`
  min-width : 300px;
  flex: 1;
  height : 60%;
  background: white;
  font-size: 3vh;
  font-weight: 500;
  box-shadow: -30px 46px 75px 16px black;
  //transform: rotate(10deg);
  //margin: 5px;
  position: relative;
  margin-top: 30px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1080px) {
    flex: 40%;
  }

`;


const Schools = styled.div`
  min-width : 300px;
  flex:1;
  height : 70%;
  background: white;
  font-size: 3vh;
  font-weight: 500;
  box-shadow: -30px 46px 75px 16px black;
  //transform: rotate(10deg);
  //margin: 5px;
  position: relative;
  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1080px) {
    flex: 40%;

  }
`;

const Extras = styled.div`
  min-width : 300px;
  flex:1;
  height : 67%;
  background: white;
  font-size: 3vh;
  font-weight: 500;
  box-shadow: -30px 46px 75px 16px black;
  //transform: rotate(10deg);
  //margin: 5px;
  position: relative;
  margin-top: 30px;
  margin-left: 3%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1080px) {
    max-width: 92%;
    transform: rotate(-3deg);

  }
`;

const Education = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  margin-top: 50px;
  font-size: 60%;
  //background : url(data:image/jpeg;base64,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);
`;

const Hobbies = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  margin: 50px 5% 5% 5%;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  z-index: 0;
`;

const HobbiesBox =styled.div`
  background-color: lightgrey;
  width: 43%;
  height: 43%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;

`;

const FlipBox =styled.div`
  background-color: transparent;
  width: 100%;
  height: 32.8%;
  margin-top: 10px;
`;

const FlipBoxInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  &:hover {
    -webkit-transform: rotateY(180deg);
  };
  -webkit-transition: transform 0.8s;
  -webkit-transform-style: preserve-3d;

`;

const FlipBoxFront = styled.div`
  background-color: lightgrey;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  justify-content: center;
  display: flex;
  align-items: center;
  
`;

const FlipBoxBack = styled.div`
  background-color: dodgerblue;
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotateY(180deg);
  justify-content: space-between;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const Thread = styled.div`
  width: 100%;
  height: 10px;
  background: grey;
  
`;

const Hook = styled.div`
  width: 2%;
  height: 70px;
  min-width: 1%;
  background: #8B4513;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  top : -30px;
`;

const Hook2 = styled.div`
  width: 2%;
  height: 70px;
  min-width: 1%;
  background: #8B4513;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  top : -30px;

  @media only screen and (max-width: 1080px) {
    background: transparent;
  }
`;

const Content = styled.div`
  font-size: 100%;
  font-weight: 800;
  height: fit-content;

  @media only screen and (max-width: 480px) {
    font-size: 43%;
  }

  @media only screen and (max-width: 780px) {
    font-size: 60%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  border-radius: 50%;
  &:hover {
    opacity:0;
  }
  z-index:1;

  @media only screen and (max-width: 780px) {
    border-radius: 1em;
  }
`;

const H3 = styled.h3`
  position: absolute;
  font-size: 70%;

  @media only screen and (max-width: 480px) {
    font-size: 40%;
  }  

  @media only screen and (max-width: 780px) {
    font-size: 50%;
  }
`;

const Address = styled.div`
  min-width : 300px;
  height : 45%;
  background: white;
  font-size: 4vh;
  font-weight: 500;
  box-shadow: -30px 46px 75px 16px black;
  -webkit-transform: rotate(2deg);
  margin: 5%;
  //position: relative;
  display: flex;
  justify-content: space-between;
  z-index: -1;
  border-radius: 1em;

  @media only screen and (max-width: 480px) {
    font-size: 3vh;
  }

  @media only screen and (max-width: 1080px) {
    font-size: 3vh;
    margin-top:10%;
    transform: rotate(3deg);
    justify-content: center;
    align-items: center;
  }

`;


export const About = () => {

  return (
    <Container id="About">
      <H1>ABOUT</H1>
      <Wrapper>
          <Thread>
          </Thread>
          <AboutContentWrapper>
            <Automobile>
              <Hook />
              <Content>
                SPORTS
              </Content>
              <Sports>
                <FlipBox>
                    <FlipBoxInner>
                      <FlipBoxFront style={{backgroundColor: "white"}}><Image src= {BKTW}/></FlipBoxFront>
                      <FlipBoxBack>CAPTAIN OF SCHOOL AND COLLEGE BASKETBALL TEAM. <br /> PLAYED AT DISTRICT LEVEL</FlipBoxBack>
                    </FlipBoxInner>
                </FlipBox>
                <FlipBox>
                    <FlipBoxInner>
                      <FlipBoxFront style={{backgroundColor: "white"}}><Image src= {VOLB}/></FlipBoxFront>
                      <FlipBoxBack>CAPTAIN OF SCHOOL VOLLEYBALL TEAM <br /> PLAYED AT STATE LEVEL</FlipBoxBack>
                    </FlipBoxInner>
                </FlipBox>
                <FlipBox>
                    <FlipBoxInner>
                      <FlipBoxFront style={{backgroundColor: "white"}}><Image src= {HAND}/></FlipBoxFront>
                      <FlipBoxBack>CAPTAIN OF SCHOOL HANDBALL TEAM <br /> POSITION AT STATE LEVEL</FlipBoxBack>
                    </FlipBoxInner>
                </FlipBox>
              </Sports>
              <Hook />
            </Automobile>
            <Schools>
              <Hook />
                <Content>
                  EDUCATION
                </Content>
                <Education>
                  <FlipBox>
                    <FlipBoxInner>
                      <FlipBoxFront>X</FlipBoxFront>
                      <FlipBoxBack>M.D.N PUBLIC SCHOOL (ROHTAK) <br /> CGPA - 9.4 <br /> YEAR OF PASSING - 2014</FlipBoxBack>
                    </FlipBoxInner>
                  </FlipBox>
                  <FlipBox>
                    <FlipBoxInner>
                      <FlipBoxFront>XII</FlipBoxFront>
                      <FlipBoxBack>M.D.N PUBLIC SCHOOL (ROHTAK) <br /> PERCENTAGE - 80% <br /> YEAR OF PASSING - 2016</FlipBoxBack>
                    </FlipBoxInner>
                  </FlipBox>
                  <FlipBox>
                    <FlipBoxInner>
                      <FlipBoxFront>COLLEGE</FlipBoxFront>
                      <FlipBoxBack>(B-TECH) - DRONACHARYA COLLEGE OF ENGINEERING (GURUGRAM) <br /> PERCENTAGE - 73% <br /> YEAR OF PASSING - 2020</FlipBoxBack>
                    </FlipBoxInner>
                  </FlipBox>
                </Education>
              <Hook />
            </Schools>

            <Extras>
              <Hook2 />
              <Content>
                HOBBIES
              </Content>
              <Hobbies>
                <HobbiesBox>
                  <H3>TRAVELLING</H3>
                  <Image style={{objectFit: "cover"}}src='https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk='/>
                </HobbiesBox>
                <HobbiesBox >
                <H3>TECHNOLOGY</H3>
                <Image style={{objectFit: "cover"}}src='https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg' />
                </HobbiesBox>
                {/* <HobbiesBox>
                  TREKKING
                </HobbiesBox> */}
                <HobbiesBox>
                <H3>AUTOMOBILE</H3>
                <Image style={{objectFit: "cover"}}src='https://assets.gqindia.com/photos/62fe0504586d8ec9846c5130/master/w_1920,h_1080,c_limit/Bugatti-La-Voiture-Noire.jpg' />
                </HobbiesBox>
                <HobbiesBox>
                <H3>OUTDOOR <br />SPORTS</H3>
                <Image style={{objectFit: "cover"}}src='https://img.lovepik.com/photo/20211123/small/lovepik-outdoor-sport-picture_500831164.jpg' />
                </HobbiesBox>
              </Hobbies>
              <Hook />
            </Extras>
            <Address>
              <Hook style={{position : "relative", height: "45%", top : "-35%", width: "2vh", minWidth: "1vh"}}/>
              {/* <Content>
                ADDRESS
              </Content> */}
              <Content style={{margin : "5%"}}>
                HOUSE NO : 411 SECTOR-21 POCKET A, GURUGRAM
                <br />
                PINCODE - 122016
                <br />
                LANDMARK - AANAND FARM HOUSE ( NEAR KRISHNA CHOWK )
                <br />
                EMAIL - TEJU.OHLAN@OUTLOOK.com
                <br />
                MOBILE - +919050433933
              </Content>
              {/* <Hook2 /> */}
            </Address>
          </AboutContentWrapper>
      </Wrapper>
    
    </Container>
  )
}

export default About;
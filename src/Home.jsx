import React from "react";
import styled from "styled-components";
import Center from "./Center";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Home=()=>{
return(
 <Container>
    <Section>
        <h4><a>Hiring in a hurry? -</a></h4>
         <p>
            Find talented pros in record time with Upwork and keep buisness
            moving.
        </p>
    </Section>
    <Layout>
       <LeftSide/>
        <Center/>
        <RightSide/>
    </Layout>
 </Container>
);
}
const Container=styled.div`
padding-top:85px;
max-width: 100%;

`;
const Section=styled.section`
min-height: 50px;
padding: 17px 0;
box-sizing: content-box;
text-align:center;
text-decoration: underline;
display: flex;
justify-content: center;
h4{
    color:#0ad878;
    font-size:21px;
    a{
        font-weight: 700;
    }
}
p{
    color: white;
    font-size: 21px;
    font-weight: 600;
}
@media (max-width:768px) {
    flex-direction: column;
    padding: 0 5px;
}
`;
const Layout=styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    margin-left: 20px;
  }
 
  @media (max-width: 1170px) {
    display: flex;
    padding: 0 7px;
 
  }
`;
export default Home;
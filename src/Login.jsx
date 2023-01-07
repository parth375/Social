import React from 'react';
import styled from 'styled-components'
const Login=()=>{
return(
<>
<Container>
    <Nav>
    <a href="/">
        <Img src="/images/Social.png" alt="logo"/>
       </a>
       <Join>
        <strong>Join Now</strong>
        </Join>
        <Sign>Sign In</Sign>
    </Nav>
    <Section><Hero>
        <h1>Communicate Collaborate Connect....</h1>
        <img src='/images/login.png' alt="pic"/>
        </Hero></Section>
    </Container>
    </>
);
}
const Container=styled.div`
padding:0px;
`;
const Nav=styled.nav`
   max-width: 1800px;
    margin:auto;
    display:flex;
    padding-top: 20px;
   align-items: center;
    position:relative;
    justify-content:space-between;
    flex-wrap:nowrap;
    &>a{
        width: 130px;
        height: 40px;
     @media(max-width: 677px){
        display: flex;
        padding-left: 30px;
        padding-top: 20px;
    }
    }
`;
const Join=styled.a`
font-size:20px;
padding-top:20px;
padding-left: 500px;
text-decoration: none;
&:hover{
     color: white;
    text-decoration: none;
}
`;
const Sign=styled.a`
font-size:20px;
padding-top: 20px;
text-decoration: none;
box-shadow: inset 0 0 0;
border-radius: 24px;
font-weight:600;
text-align: center;
&:hover{
    background-color: #119b5b;
    color: white;
}
`;
const Section= styled.section`
      display: flex;
      align-content: flex-start;
      min-height: 677px;
      padding-bottom: 138px;
      padding-top:40px;
      padding: 60px 0;
      position:relative;
      flex-wrap: wrap;
      width:100%;
      max-width: 1228px;
      margin-top: 50px;
      align-items: center;
      @media(max-width:677px) {
        margin: auto;
        min-height: 0px;
      }

`;
const Hero=styled.div`
h1{
    font-size: 60px;
    font-weight: 200;
    line-height: 80px;
    color: white;
    &:hover{
     color: #119b5b;
    text-decoration: none;
}
    @media(max-width:677px) {
        text-align: center;
        font-size:20px;
        width: 100%;
        line-height: 2;
    }
}
`;
const Img=styled.img`
 width:100%;
 padding-right:40px;
`;
export default Login;
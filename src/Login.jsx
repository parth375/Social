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
    <Section>Section</Section>
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
`;
const Img=styled.img`
 width:100%;
 padding-right:40px;
`;
export default Login;
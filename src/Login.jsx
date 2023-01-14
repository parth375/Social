import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { signInAPI } from './action';
import { Navigate } from 'react-router-dom';
const Login=(props)=>{
return(
<>
<Container>
    {
    props.user&&<Navigate to="/"/>
    }
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
        </Hero>
        <Form>
            <Google onClick={()=>props.signIn}>
                <img src="/images/google.svg" alt="" />
                Sign in with Google
            </Google>
        </Form>
        </Section>
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
     @media(max-width: 768px){
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
    background-color: #0ad878;
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
      @media(max-width:768px) {
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
     color: #0ad878;
    text-decoration: none;
}
    @media(max-width:768px) {
        text-align: center;
        font-size:20px;
        width: 100%;
        line-height: 2;
    }
}
img{
    z-index: -1;
    width:700px;
    height: 590px;
    position:absolute;
   right:-230px;
  @media (max-width: 768px) {
  top:200px;
  width: initial;
  position: initial;
  height: initial;
  }
  @media (max-width: 1190px) {
    top:200px;
  width: initial;
  position: initial;
  height: initial;
  }
  -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;
}

@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}
`;
const Form= styled.div`
margin-top:100px;
width:400px;
@media(max-width:768px){
    margin-top:20px;
}
`;
const Google=styled.button`
display:flex;
justify-content: center;
background-color: #fff;
align-items: center;
height: 56px;
width: 100%;
margin-top: 30px;
margin-left:90px;
border-radius:28px;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
vertical-align: middle;
z-index: 0;
transition-duration:167ms;
font-size: 20px;
color:black;
&:hover{
  background-color:#0ad878;
  color:white;
}
`;

const Img=styled.img`
 width:100%;
 padding-right:40px;
`;
const mapStateToProps=(state)=>{
    return{
       
    };

};
const mapDispatchToProps=(dispatch)=>({
    signIn:()=>dispatch(signInAPI()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);

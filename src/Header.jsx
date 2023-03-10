import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "./action";
const Header=(props)=>{
       return(
        <>
        <Container>
            <Content>
              <Logo>
                <a href="/">
                <img src="/images\bnw.svg"></img>
                </a>
              </Logo>
              <Search>
                <div>
                    <input type="search" placeholder="Search"/>
                </div>
                <SearchIcon>
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
                </SearchIcon>
              </Search>
              <Nav>
                <NavListWrap>
                  <NavList className="active">
                    <a>
                      <img src="/images\nav-home.svg"/>
                      <span>Home</span>
                    </a>
                  </NavList>
                  <NavList>
                    <a>
                      <img src="/images\nav-network.svg"/>
                      <span>My Network</span>
                    </a>
                  </NavList>
                  <NavList>
                    <a>
                      <img src="/images\nav-jobs.svg"/>
                      <span>Jobs</span>
                    </a>
                  </NavList>
                  <NavList>
                    <a>
                      <img src="/images\nav-messaging.svg"/>
                      <span>Messaging</span>
                    </a>
                  </NavList>
                  <NavList>
                    <a>
                      <img src="/images\nav-notifications.svg"/>
                      <span>Notifications</span>
                    </a>
                  </NavList>
                  <User>
                    <a>
                      {props.user && props.user.photoURL? (
                      <img src={props.user.photoURL} alt="dp"/>
                     ):( <img src="/images\user.svg"/>
                
                       )}
                      <span>Me</span>
                      <img src="/images\down-icon.svg"/>
                    </a>
                    <SignOut onClick={()=>props.signOut()}>
                    <a>
                   Sign Out
                    </a>
                  </SignOut>
                  </User>
               
                  <Work>
                  <a>
               <img src="/images/nav-work.svg"/>
                      <span>
                       Work
                      <img src="/images/down-icon.svg"/>
                    </span>
                  </a>
                  </Work>
                </NavListWrap>
              </Nav>
            </Content>
        </Container>
        </>
       );
}
const Container=styled.div`
background-color: #1d2226;
border-bottom: 1px solid rgba(0,0,0,0.08);
left: 0;
padding: 0px 1px 0px 40px;
position: fixed;
top:0;
width: 109vw;
height:58px;
z-index: 100;
`;
const Content=styled.div`
display: flex;
align-items:center;
min-height: 100%;
max-width: 1600px;
`;
const Logo= styled.span`
margin-right: 8px;
font-size:0px;
`;
const Search=styled.div`
 opacity: 1;
flex-grow: 1;
 position: relative;
 &>div{
  max-width: 280px;
  input{
    border:1px solid;
    box-shadow:none;
    background-color:black;
    border-radius: 5px;
    color:white;
    width: 219px;
    padding:0 8px 0 40px;
    line-height: 1.75;
    font-weight:400;
    font-size: 14px;
    height: 40px; 
    border-color:white;
    vertical-align: text-top;
   }
 }
`;

const SearchIcon=styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left:2px;
margin: 0;
border-radius: 0 2px 2px 0;
margin:0;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
`;
const Nav=styled.nav`
 margin-left: auto;
display: block;
 @media(max-width:500px){
  position: fixed;
  left: 0;
  bottom: 0;
  width: 80%; 
 }

`;
const NavListWrap=styled.ul`
display:flex;
flex-wrap: nowrap;
list-style-type:none;
.active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 3px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color:#0ad878;
    }
  }
`;
const NavList=styled.li`
display:flex;
align-items: center;

a{
  align-items: center;
  background: transparent;
  display: flex;
  padding: 10px;
  flex-direction: column;
  font-size: 12px;
  font-weight:400;
  justify-content: center;
  line-height: 1.5;
  min-height: 52px;
  min-width: 80px;
  position: relative;
  text-decoration: none;
  span{
    font-size:small;
    display:flex;
    align-items: center;
  }
  @media(max-width:768px){
    min-width: 36px;
  }

 
}
&:hover,
&:active{
a{
span{
  color:white;
}
}
}
`;
const SignOut=styled.div`
margin-top:10px;
margin-left: 10px;
position:absolute;
top:45px;
border-radius: 0 0 5px 5px;
width:80px;
height:30px;
transition-duration:167ms;
text-align:center;
display:none;
color:white;
background-color: #0ab967;

`;
const User=styled(NavList)`
a>svg{
  width:24px;
  border-radius: 50%;
}
a>img{
  width:24px;
  height: 24px;
  border-radius: 50%;
}
span{
  display:flex;
  align-items: center;
}
&:hover {
  ${SignOut} { // to select sign Out component
  align-items:center;
  display:flex;
  justify-content: center;
  }
}
`;
const Work=styled(User)`
 border-left: 1px solid #0ad878;
`;
const mapStateToProps=(state)=>{
  return{
   user:state.userState.user,
  }
};
const mapDispatchToProps=(dispatch)=>({
  signOut:()=>dispatch(signOutAPI()),
});
export default connect(mapStateToProps,mapDispatchToProps) (Header);
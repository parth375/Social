import React from "react";
import styled from "styled-components";
const LeftSide=()=>{
return(
<Container>
    <ArtCard>
        <UserInfo>
            <CardBackground/>
            <a>
                <Photo/>
                <Link>Welcome, there!</Link>
            </a>
            <a>
            <AddPhotoText>Add a photo</AddPhotoText>
            </a>
        </UserInfo>
        <Widget>
            <a>
        <div>
        <span>Connections</span>
        <span>Grow your networks</span>
        </div>
            <img width="23px"src="/images/widget-icon.svg"/>
            </a>
        </Widget>
        <Item>
            <span>
            <img src="/images/item-icon.svg"/>
            My Items
            </span>
        </Item>
        </ArtCard>
        <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
</Container>
);
}
const Container=styled.div`
padding-right: 60px;
grid-area:leftside;
`;
const ArtCard=styled.div`
text-align:center;
overflow:hidden;
margin-bottom: 8px;
background-color: #1d2226;
border-radius: 10px;
position: relative;
color:white;
transition: box-shadow 83ms;
border:none;
box-shadow: 0px 1px 2px 0px #088951b1,
            1px 2px 4px 0px #0e9c5cb1,
            2px 4px 8px 0px #0eb189b1,
            2px 4px 16px 0px #0f9583b1;
`;
const UserInfo=styled.div`
border-bottom: 1px solid rgba(0,0,0,0.15);
padding:12px 12px 16px;
word-wrap:break-word;
word-break: break-word;

`;
const CardBackground=styled.div`
background:url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
height:54px;
margin:-12px -12px 0;
`;
const Photo=styled.div`
background-image:url("/images/photo.svg");
  width:72px;
  height:72px;
  box-sizing: border-box;
  background-clip:content-box;
  background-color: #1d2226;
  background-position: center;
  background-size: 60%;
  background-repeat:no-repeat;
  margin:-38px auto 12px;
  border-radius: 50%;
`;
const Link=styled.div`
 font-size:17px;
 line-height:1.5;
 font-weight: 700;
`;
const AddPhotoText=styled.div`
 margin-top: 4px;
 font-size: 16px;
 line-height: 1.33;
 font-weight: 500;
`;
const Widget=styled.div`
border-top: 1px solid #f7f7f728;;
border-bottom: 1px solid #f7f7f728;
padding-top:12px;
padding-bottom: 12px;
&>a{
    text-decoration: none;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

&:hover{
    background-color: #ddd9d91c;
}
div{
    font-weight: 600;
    display:flex;
    flex-direction: column;
    text-align: left;
    span{
        font-size:17px;
        line-height: 1.333;
        &:first-child{
            color:#ffffff9a;
        }
        &:nth-child(2){
            color:#fffdfd;
        }
    }
}
}

`;
const Item=styled.a`
 text-align: left;
 padding: 15px;
 font-size: 15px;
 font-weight: 600;
 display: block;
 span{
    display: flex;
    align-items: center;
    color:#f6f2f2;
    svg{
        color:rgba(0,0,0,0.6)
    }
 }
 
&:hover{
    background-color: #ddd9d91c;
}
`;
const CommunityCard=styled(ArtCard)`
margin-top: 30px;
padding:15px 0 0;
text-align:left;
display:flex;
flex-direction: column;
a{
    color:white;
    padding:7px 12px 6px 12px;
    font-size:14px;
    &:hover{
       color: #0ad878;
    }
    span{
        display:flex;
        align-items: center;
        padding-top: 5px;
        justify-content: space-between;
    }
    &:last-child{
        color:#ffffffa5;
        text-decoration:none;
        border-top:1px solid #0ad878;
        padding:13px;
        &:hover{
            background-color:rgba(0,0,0,0.06);
        }
    }
}
`;
export default LeftSide;
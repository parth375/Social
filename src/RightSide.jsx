import React from "react";
import styled from "styled-components";
const RightSide=()=>{
    return(
        <>
    <Container>
    <FollowCard>
   <Title>
    <h2>Add to your feed</h2>
    <img src="/images/feed-icon.svg"/>
   </Title>
   <FeedList>
    <li>
        <a>
          <Avatar/>  
        </a>
        <div>
<span>#Linkedin</span>
        <button>Follow</button>
        </div>
    </li>
    <li>
        <a>
            <Avatar/>
        </a>
        <div>
            <span>#Video</span>
            <button>Follow</button>
        </div>
    </li>
   </FeedList>
   <Recommendation>
    View all recommendations
    <img src="/images/right-icon.svg"/>
   </Recommendation>
   </FollowCard>
   <BannerCard>
    <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"/>
   </BannerCard>
    </Container>
    </>
    )
}
const Container=styled.div`
grid-area:rightside;
`;
const FollowCard=styled.div`
text-align:center;
overflow: hidden;
margin-bottom: 8px;
background-color:#1d2226;
border-radius: 5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgb(0,0,0 /15%), 0 0 0 rgb(0,0,0 /20%);
padding:12px;
`;
const Title=styled.div`
display: inline-flex;
align-items:center;
justify-content: space-between;
font-size:16px;
width:100%;
color:#fff;
`;
const FeedList=styled.ul`
margin-top: 16px;
li{
    display:flex;
    align-items: center;
    margin:12px 0;
    position:relative;
    font-size:14px;
    &>div{
        display:flex;
        flex-direction:column;

    }
    button{
        background-color:transparent;
        color:white;
        box-shadow:inset 0 0 0 1px #f1e7e7b0;
        padding:16px;
        align-items:center;
        border-radius: 15px;
        box-sizing: border-box;
        font-weight: 600;
        display: inline-flex;
        justify-content: center;
        max-height:32px;
        max-width:480px;
        text-align: center;
        outline: none;
    }
}
`;
const Avatar=styled.div`
background-image:url("icons8-hashtag-100.png");
  background-position: center;
  background-repeat: no-repeat;
  width:38px;
  height:48px;
  margin-right:8px;
  border-radius: 60%;
`;
const Recommendation=styled.a`
color: #0ad878;
display:flex;
align-items: center;
font-size:14px;
`;
const BannerCard=styled(FollowCard)`
img{
    width:100%;
    height:100%;
}
`;
export default RightSide;
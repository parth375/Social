import React, { useState } from "react";
import styled from "styled-components";
const News=()=>{
    const [word,setWord]=useState("News");
    const [count,setCount]=useState(0);
  async function getNews(){
  
    let response=await fetch("https://official-joke-api.appspot.com/random_joke");
    let res=await response.json();
    setWord(res.punchline);
  }
  getNews();
    return(
        <>
    <Container>
   <Title>
    <h2>Social News</h2>
    <img  src="/images\icons8-rss-48.png"/>
   </Title>
   <FeedList>
   <Report>
   <li>
    <p>{word}</p>
    </li>
   </Report>
   </FeedList>
   </Container>
    </>
    )
}
const Container=styled.div`
grid-area:rightside;
`;
const Report=styled.div`
text-align:center;
overflow: hidden;
margin-bottom: 8px;
color:white;
`;
const Title=styled.div`
display: inline-flex;
align-items:center;
justify-content: space-between;
font-size:16px;
width:100%;
color:#fff;
img{
    width:35px;
}
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
export default News;
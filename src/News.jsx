import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import { FcApproval } from "react-icons/fc";
const News=()=>{
    return(
        <>
    <Container>
   <Title>
    <h2><FcApproval/>Social News</h2>
   </Title>
   
   <FeedList>
    <Headline id={1}/>
   </FeedList>
   <FeedList>
   <Headline id={3}/>
   </FeedList>
   <FeedList>
   <Headline id={8}/>
   </FeedList>
   <FeedList>
   <Headline id={7}/>
   </FeedList>
   <FeedList>
   <Headline id={2}/>
   </FeedList>
   <FeedList>
   <Headline id={6}/>
   </FeedList>
   </Container>
    </>
    )
}
const Container=styled.div`
grid-area:rightside;
`;
const Title=styled.div`
display: flex;
align-items:left;
justify-content: space-between;
font-size:20px;
color:#fff;
`;
const FeedList=styled.ul`
width: 100%;
display: flex;

line-height: 100%;
font-size: medium;
font-weight: 600;
align-items: left;
margin-top: 30px;
&:hover{
  background-color: #6d6c6c39;
}
`;
export default News;
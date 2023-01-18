import React from "react";
import styled from "styled-components";
import { FcApproval } from "react-icons/fc";
import { FcInfo} from "react-icons/fc";
const News=()=>{
  const arr=["The 25 fastest-growing jobs in India Top news"," Microsoft to lay off 10,000 workers","PepsiCo to hire 1,200","Mohalla Tech cuts more jobs","Startups wooing talent in new ways"," What India's declining exports mean"," Loans for phones to surge","India CEOs positive about economy","Blue Tokai raises $30 million"];
    return(
        <>
    <Container>
   <Title>
    <h2><FcApproval/>Social News</h2>
   </Title>
   
   <FeedList>
   <p><FcInfo/>{arr[0]}</p>
   </FeedList>
  <FeedList>
   <p><FcInfo/>{arr[1]}</p>
   </FeedList>
   <FeedList>
   <p><FcInfo/>{arr[2]}</p>
   </FeedList>
   <FeedList>
   <p><FcInfo/>{arr[3]}</p>
   </FeedList>
  <FeedList>
   <p><FcInfo/>{arr[4]}</p>
   </FeedList>
   <FeedList>
   <p><FcInfo/>{arr[5]}</p>
   </FeedList>
   <FeedList>
   <p><FcInfo/>{arr[6]}</p>
   </FeedList>
   <FeedList>
   <p><FcInfo/>{arr[7]}</p>
   </FeedList>
   <FeedList>
   <p><FcInfo/>{arr[8]}</p>
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
color:white;
padding: 10px;
font-weight: 600;
font-size: medium;
line-height: 100%;
font-size: medium;
font-weight: 600;
align-items: left;
margin-top: 20px;
&:hover{
  background-color: #6d6c6c39;
}
`;
export default News;
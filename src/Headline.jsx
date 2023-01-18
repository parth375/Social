import React, { useState } from "react"
import styled from "styled-components";
import { FcInfo} from "react-icons/fc";
const Headline=({id})=>{
    const [word,setWord]=useState("News");
  async function getNews(){
  
    let response=await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a68265a8c3834b1ba4a05e383accd5aa");
    let res=await response.json();
    setWord(res.articles[id].title);
  }
  getNews();
return(
<>
<Report>
<h2><FcInfo/>{word}</h2>
</Report>
</>
);
}
const Report=styled.div`
  text-align: left;
  padding: 10px;
`;
export default Headline;
import { useState } from "react";
import styled from "styled-components";
const PostModal=(props)=>{
    const[text,setText]=useState("");
    const [image,setImage]=useState("");
    const reset=(e)=>{
        setText("");
        props.handleClick(e);
    };
    return(
        <>
        {
            props.showModal=== "open"&&(
    <Container>
        <Content> 
            <Header>
                <h2>Create a Post</h2>
                <button onClick={(event)=>reset(event)}>
               <img width="17px"src="/images\icons8-close-48.png"/>
                </button>
            </Header>
            <SharedContent>
                <UserInfo>
                <img src="/images\user.svg"/>
                    <span>Name</span>
                </UserInfo>
                <Editor>
                <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="What you want to talk about?" autoFocus={true}></textarea>
                </Editor>
            </SharedContent>
            <SharedCreation>
              <Attach>
                <Asset>
                    <img src=""/>
                </Asset>
                <Asset>
                    <img src=""/>
                </Asset>
              </Attach>
              <ShareComment>
                <Asset>
                    <img src=""/>
                    Anyone
                </Asset>
              </ShareComment>
              <PostButton disabled={!text?true:false}>
                <img width="30px"src="/images\icons8-email-send-48.png"/>
              </PostButton>
            </SharedCreation>
        </Content>
    </Container>
     )}
    </>
    );
}
const Container=styled.div`
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
z-index: 9999;
color:black;
background:rgba(0,0,0,0.5);
animation: fadeIn 0.3s;
`;
const Content=styled.div`
width:100%;
max-width: 552px;
background-color: #1d2226;
max-height: 90%;
overflow: initial;
border-radius: 5px;
position: relative;
display:flex;
flex-direction: column;
top:32px;
margin: 0 auto;
`;
const Header=styled.div`
display: block;
padding:16px 20px;
border-bottom: 1px solid rgba(0,0,0,0.15);
font-size:16px;
line-height: 1.5;
color:rgba(0,0,0,0.6);
font-weight:400;
display:flex;
justify-content: space-between;
align-items: center;
button{
   border-radius: 50%;
   background-color: transparent;
   padding-right: 20px;
   padding-left: 2px;
   border: none;
   height: 18px;
   width: 17px;
   &:hover{
    background-color: #f8060685;
   }
   img{
    pointer-events: none;
   }
    }
`
const SharedContent=styled.div`
display:flex;
flex-direction: column;
flex-grow: 1;
overflow-y:auto;
vertical-align: baseline;
background: transparent;
padding: 6px 12px;
`;
const UserInfo=styled.div`
display: flex;
align-items: center;
padding: 12px 24px;
img{
    width:48px;
    height:48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
}
span{
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
}
`;
const SharedCreation=styled.div`
display:flex;
justify-content: space-between;
padding:12px 24px 12px 16px;
`;
const Asset=styled.button`
display:flex;
align-items: center;
height: 40px;
min-width: auto;
color:rgba(0,0,0,0.5);
`;
const Attach=styled.div`
align-items: center;
display: flex;
padding-right:8px;
${Asset}{
    width: 40px;
}
`;
const ShareComment=styled.div`
padding-left:8px;
margin-right:auto;
border-left:1px solid #fcfcfc26;
`;
const PostButton=styled.button`
border-radius: 10%;
padding-left: 19px;
padding-right: 15px;
border: none;
background: none;
&:hover{
    background: #65eedea6;
}
`;
const Editor=styled.div`
padding:12px 24px;
textarea{
    width:100%;
    min-height: 100px;
    resize: none;
}
input{
    width:100%;
    height:35px;
    font-size:16px;
    margin-bottom: 20px;
}
`;
export default PostModal;
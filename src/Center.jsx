import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal"
import { connect } from "react-redux";
import { getArticlesAPI } from "./action";
import ReactPlayer from "react-player";
const Center=(props)=>{
    const [showModal,setShowModal]=useState("close");
    useEffect(()=>{
        props.getArticles();
    },[]);
    const handleClick=(e)=>{
  e.preventDefault();
if(e.target!==e.currentTarget){
    return;
}
switch(showModal){
    case "open":
    setShowModal("close");
    break;
    case "close":
    setShowModal("open");
    break;
    default:
    setShowModal("close");
    break; 
}
    };
    return(
        <>
        {props.articles.length==0?
        <p>There are NO ARTICLES!!!</p>
        :
        <Container>
        <ShareBox>    
        <div>
        {props.user&&props.user.photoURL?(<img src={props.user.photoURL}/>):(
        <img src="/images/user.svg"/>
        )}
        <button onClick={handleClick} disabled={props.loading?true:false}>Start a post</button>
        </div>
        <div>
            <button>
            <img width="27px"src="images/icons8-photo-gallery-48.png"/>
                <span>Photo</span>
            </button>
        
            <button>
                <img width="22px"src="/images/icons8-clapboard-64.png"/>
                <span>Video</span>
            </button>
            
            <button>
                <img width="25px"src="images/icons8-planner-48.png"/>
                <span>Event</span>
            </button>
            <button>
            <img width="27px"src="images/icons8-web-design-100.png"/>
                <span>Write an article</span>
            </button>
        </div>
        </ShareBox>
        <Content>
            {props.loading && <img src="/images\Spin-1s-200px.svg"/>}
             {props.articles.length>0&&
             props.articles.map((article,key)=>(
                
            <Article key={key}>
                <SharedActor>
                    <a>
                        <img src={article.actor.image}/>
                        <div>
                            <span>{article.actor.title}</span>
                            <span>{article.actor.description}</span>
                            <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                        </div>

                    </a>
                    <button>
                        <img width="28px"src="/images\icons8-ellipsis-48.png"/>
                    </button>
                </SharedActor>
                <Description>
                 {article.description}
                </Description>
                <SharedImg>
                    <a>
                {!article.sharedImg&&article.video?<ReactPlayer width={'100%'} url={article.video}/>
                
                :
                (article.sharedImg&&<img src={article.sharedImg}/>)}
                    </a>
                </SharedImg>
                <SocialCounts>
                    <li>
                        <button>
                        <img width="20px"src="/images\icons8-positive-feedback-of-thumbs-up-while-syncing-application-28.png"/>
                        <img width="17px" src="/images\icons8-high-five-64.png"/>
                        <span>75</span>
                        </button>
                    </li>
                    <li>
                        <a>
                        2 Comments
                        </a>
                    </li>
                </SocialCounts>
                <SocialActions>
                <button>
                    <img/>
                    <span>Like</span>
                </button>
                <button>
                    <img/>
                    <span>Share</span>
                </button>
                <button>
                    <img/>
                    <span>Comment</span>
                </button>
                <button>
                    <img/>
                    <span>Send</span>
                </button>
                </SocialActions>
            </Article>
             ))}
            </Content>
        <PostModal showModal={showModal} handleClick={handleClick}/>
        </Container>
}
        </>
    )
}
const Container=styled.div`
grid-area:main;
`;
const CommonCard=styled.div`
text-align:center;
overflow:hiddden;
margin-bottom: 8px;
background-color:#1d2226;
border-radius: 5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgba(0 0 0 /15%) 0 0 0 rgba(0,0,0 /20%);
`;
const ShareBox=styled(CommonCard)`
padding-top:10px;
display:flex;
flex-direction: column;
color:white;
margin:0 0 8px;
border-radius: 10px;
div{
    button{
        outline: none;
        color:rgba(0,0,0, 0.6);
        font-size:14px;
        min-height: 45px;
        background: transparent;
        border-radius: 5px;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    &:first-child{
        display: flex;
        align-items: center;
        padding:8px 16px 0px 16px;
        img{
            width:48px;
            border-radius:50%;
            margin-right: 8px;
        }
        button{
            color:#8b8989;
            margin:4px 0;
            flex-grow: 1;
            border-radius: 35px;
            padding-left: 16px;
            border:1px solid #8b8989;
            border-radius:35px;
            background-color: #1d2226;
            text-align:left;
        }
    }
    &:nth-child(2){
        display: flex;
        flex-wrap:wrap;
        justify-content: space-around;
        padding-bottom:4px;
        button{
            img{
                margin: 0  4px 0 -2px;
            }
            span{
                color:#70b5f9;
            }
        }
    }
}
`;
const Article=styled(CommonCard)`
padding:0;
margin:0 0 8px;
overflow: visible;
`;
const SharedActor=styled.div`
padding-right: 40px;
flex-wrap:nowrap;
padding:12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
border-radius: 10px;
a{
    margin-right: 12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration: none;
    img{
        width:48px;
        height:48px;
    }
    &>div{
        display:flex;
        flex-direction: column; 
        flex-grow:1;
        margin-left:8px;
        overflow:hidden;
        span{
            text-align:left;
            &:first-child{
                font-size:14px;
                font-weight:700;
                color:white;
            }
            &:nth-child(n+1){
                font-size:12px;
                color:white;
            }
        }
    }
}
button{
        position:absolute;
        right:12px;
        top:0;
        background: transparent;
        border:none;
        outline:none;
    }
`;
const Description=styled.div`
 padding:0 16px;
 overflow:hidden;
 color:white;
 font-size:14px;
 text-align:left;
`;
const SharedImg=styled.div`
margin-top:8px;
width:100%;
display: block;
position:relative;

img{
    object-fit:contain;
    width:100%;
    height:100%;
}
`;
const SocialCounts=styled.ul`
line-height: 1.33;
display: flex;
align-items: flex-start;
overflow:auto;
margin:0 16px;
padding: 8px 0;
border-bottom: 1px solid white;
list-style:none;
li{
    margin-right:5px;
    font-size:12px;
    button{
        color: #b8b6b6;
        background-color:transparent;
        display: flex;
        border: none;
    }
}
`;
const SocialActions=styled.div`
align-items:center;
display: flex;
justify-content: flex-start;
margin:0;
min-height: 4px 8px;
button{
    display:inline-flex;
    align-items:center;
    padding:8px;
    color:#0a66c2;
    @media(min-width:768px){
        span{
        margin-left:8px;
        }
    }
}
`;
const Content=styled.div`
  text-align:center;
  &>img{
    width:30px;
  }
`;
const mapStateToProps=(state)=>{
    return{
        loading:state.articleState.loading,
        user:state.userState.user,
        articles:state.articleState.articles,
    };
};
const mapDispatchToProps=(dispatch)=>({
    getArticles:()=>dispatch(getArticlesAPI()),
})

export default connect( mapStateToProps,mapDispatchToProps)(Center);
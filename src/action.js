import {auth, provider, storage} from "./firebase";
import { SET_USER,SET_LOADING_STATUS,GET_ARTICLES} from "./actionType";
import db from "./firebase";
export const setUser=(data)=>({
    type:SET_USER,
    user:data,
});
export const setLoading=(status)=>({
  type:SET_LOADING_STATUS,
  status:status,
});
export const getArticles=(data)=>({
  type:GET_ARTICLES,
  data:data,
})
// sign in function
export function signInAPI(){
  return (dispatch)=>{
    auth
    .signInWithPopup(provider)
    .then((data)=>{
        dispatch(setUser(data.user));
    }).catch((error)=>alert(error.message));

  }
}
// to get authentication info
export function getUserAuth(){
  return (dispatch)=>{
    auth.onAuthStateChanged(async(user)=>{
      if(user){
        dispatch(setUser(user));
      }
    });
  };
}
// to sign out function
export function signOutAPI(){
  return (dispatch)=>{
    auth
    .signOut()
    .then(()=>{
      dispatch(setUser(null));
    })
    .catch((error)=>{
      console.log(error.message);
    });
  }
}
// upload image and video
export function postArticleAPI(data){
  return (dispatch)=>{
    dispatch(setLoading(true));

    if(data.image!= ""){
      const upload=storage
      .ref(`images/${data.image.name}`)
      .put(data.image);
      upload.on('state_change',(snapshot)=>{
        const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log(`Progress: ${progress}%`);
        if(snapshot.state==="RUNNING"){
          console.log(`Progress:${progress}%`);
        }
      }, (error)=>console.log(error.code),
      async()=>{
        const downloadURL=await upload.snapshot.ref.getDownloadURL();
        db.collection("articles").add({
          actor: {
            description:data.user.email,
            title:data.user.displayName,
            date:data.timestamp,
            image:data.user.photoURL,
          },
          video:data.video,
          sharedImg:downloadURL,
          comments:0,
          description:data.description,
        });
        dispatch(setLoading(false));
      }
      )
    } else if(data.video){
      db.collection("articles").add({
        actor: {
          description:data.user.email,
          title:data.user.displayName,
          date:data.timestamp,
          image:data.user.photoURL,
        },
        video:data.video,
        sharedImg:"",
        comments:0,
        description:data.description,
    });
    dispatch(setLoading(false));
    }
  };
}
// to get Articles
export function getArticlesAPI(){
  return (dispatch)=>{
    let data;
    db.collection("articles")
    .orderBy("actor.data","desc")
    .onSnapshot((snapshot)=>{
      data=snapshot.docs.map((doc)=>doc.data());
     dispatch(getArticles(data));
    });
  };
}
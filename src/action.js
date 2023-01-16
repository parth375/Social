import {auth, provider} from "./firebase";
import { SET_USER } from "./actionType";
export const setUser=(data)=>({
    type:SET_USER,
    user:data,
});
export function signInAPI(){
  return (dispatch)=>{
    auth
    .signInWithPopup(provider)
    .then((data)=>{
        dispatch(setUser(data.user));
    }).catch((error)=>alert(error.message));

  }
}

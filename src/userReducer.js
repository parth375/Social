import { SET_USER } from "./actionType";
const INITIAL_STATE={
    user:null,

};

const userReducer=(state=INITIAL_STATE,action)=>{
    if(action.type==SET_USER){
        return{
         ...state,
         user:action.user,
        }
   
    }
    return state;
};

export default userReducer;
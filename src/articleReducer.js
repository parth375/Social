import { SET_LOADING_STATUS,GET_ARTICLES} from "./actionType";
export const initState={
    articles:[],
    loading:false,
};
const articleReducer=(state=initState,action)=>{
    if(action.type==GET_ARTICLES){
        return {
            ...state,
            articles:action.data,
        }
    }
    if(action.type==SET_LOADING_STATUS){
       return{
        ...state,
        loading:action.status,
       }
    }
    return state;
};
export default articleReducer;
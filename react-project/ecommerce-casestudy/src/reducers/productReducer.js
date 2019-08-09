
import * as actionTypes from '../actions/types';
const initialState= {
    posts:[],
    postsFilter:[]
    //tempAr:[]
}


const user =(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ALL_DATA:
            return {
                ...state,
                posts:action.value,
                postsFilter:action.value

            };
        break;
        case actionTypes.DISPLAY:
            console.log(state.posts)
            let temparr =[];
            for(let i=0;i<state.posts.length;i++)
            {
                if(state.posts[i].category.localeCompare(action.category)==0)
                {
                    temparr.push(state.posts[i])
                }
                if(action.category.localeCompare('all')==0)
                {
                    temparr.push(state.posts[i])
                }
            }
            return{
                ...state,//initital state
                postsFilter:[...temparr]
            };
        break;
     
            default:
                return state;
    }
   
};


export default  user;
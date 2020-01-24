import {REQUEST_START, REQUEST_SUCCESS} from "../action/actionDishes/actionDishes";

const initialState ={
  dishes:null,
    loading:false
};
 const reducerDishes = (state = initialState,action)=>{
     switch (action.type) {
         case REQUEST_SUCCESS :
             return {
                 ...state,
                 dishes: action.data,
                 loading: false
             };
         case REQUEST_START:
             return {
                 ...state,
                 loading: true
             };
         default:return state
     }

};
export default reducerDishes;
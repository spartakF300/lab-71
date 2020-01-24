import {REQUEST_START_ORDERS, REQUEST_SUCCESS_ORDERS} from "../action/actionOrders/actionOrders";

const initialState = {
  orders:null,
    loading:false
};
 const reducerOrders = (state = initialState,action)=>{
     switch (action.type) {
         case REQUEST_START_ORDERS:
             return {
               ...state,
               loading: true
             };
         case REQUEST_SUCCESS_ORDERS:
             return {
                 ...state,
                 orders: action.data,
                 loading:false
             };
         default:return state
     }

};
export default reducerOrders;
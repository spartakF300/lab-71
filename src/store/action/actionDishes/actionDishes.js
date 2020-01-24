import {axiosRequest} from "../../../axiosRequest";
import {deleteOrders} from "../actionOrders/actionOrders";

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

export const REQUEST_ERROR = 'REQUEST_ERROR';
export const request = ()=>{
    return{type:REQUEST_START}
};
export const requestSuccess = (data)=>{
    return{type:REQUEST_SUCCESS,data}
};
export const requestError = (error)=>{
    return{type:REQUEST_ERROR,error }
};

export const getDishes = ()=>{
  return (dispatch)=> {
      dispatch(request());
      axiosRequest.get('dishes/.json').then(res => {
          dispatch(requestSuccess(res.data))
      }, error => {
          dispatch(requestError(error))
      })
  }
};
export const postDishes = (dish)=>{
    return (dispatch)=> {
        dispatch(request());
        axiosRequest.post('dishes/.json',dish).then(res => {
            dispatch(getDishes())
        }, error => {
            dispatch(requestError(error))
        })
    }
};
export const editDishes = (dish,id)=>{
    return (dispatch)=> {
        dispatch(request());
        axiosRequest.put(`dishes/${id}.json`,dish).then(res => {
            dispatch(getDishes())
        }, error => {
            dispatch(requestError(error))
        })
    }
};
export const remove = (id)=>{
    return (dispatch)=> {
        dispatch(request());
        axiosRequest.delete(`dishes/${id}.json`).then(res => {
            dispatch(getDishes())
            dispatch(deleteOrders(id))

        }, error => {
            dispatch(requestError(error))
        })
    }
};
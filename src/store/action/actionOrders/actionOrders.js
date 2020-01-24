import {axiosRequest} from "../../../axiosRequest";
import {remove} from "../actionDishes/actionDishes";
export const REQUEST_START_ORDERS = 'REQUEST_START_ORDERS';
export const REQUEST_SUCCESS_ORDERS = 'REQUEST_SUCCESS_ORDERS';

export const REQUEST_ERROR_ORDERS = 'REQUEST_ERROR_ORDERS';
export const requestOrders = ()=>{
    return{type:REQUEST_START_ORDERS}
};
export const requestSuccessOrders = (data)=>{
    return{type:REQUEST_SUCCESS_ORDERS,data}
};
export const requestErrorOrders = (error)=>{
    return{type:REQUEST_ERROR_ORDERS,error }
};
export const getOrders = ()=>{
    return (dispatch)=> {
        dispatch(requestOrders());
        axiosRequest.get('orders/.json').then(res => {
            dispatch(requestSuccessOrders(res.data))
        }, error => {
            dispatch(requestErrorOrders(error))
        })
    }
};
export const deleteOrders = (id)=>{
    return (dispatch)=> {
        dispatch(requestOrders());
        axiosRequest.delete('orders/'+id+'.json').then(res => {
            dispatch(getOrders());
            dispatch(remove(id))
        }, error => {
            dispatch(requestErrorOrders(error))
        })
    }
};
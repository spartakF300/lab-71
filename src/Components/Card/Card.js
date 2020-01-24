import React from 'react';
import './Card.css'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {remove} from "../../store/action/actionDishes/actionDishes";
const Card = (props) => {
    return (
        <div className="wrap-card">
            <img  className="img" src={props.url} alt=""/>
            <p>Name:  {props.title}</p>
            <p>Price: {props.price}</p>
            <Link tag={Link}  to={'edit/'+props.id} ><i style={{fontSize:'40px'}} className="fas fa-edit"></i></Link>
            <button onClick={()=>props.remove(props.id)}><i style={{fontSize:'40px'}} className="fas fa-trash-alt"></i></button>
        </div>
    );
};
const mapDispatchToProps = (dispatch)=>{
    return{
        remove:(id)=> dispatch(remove(id))

    }
};

export default connect(null,mapDispatchToProps) (Card);
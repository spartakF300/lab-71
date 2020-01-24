import React, {Component} from 'react';
import Form from "../../Components/Form/form";
import {editDishes} from "../../store/action/actionDishes/actionDishes";
import {connect} from "react-redux";

class Edit extends Component {
    state ={
        title:'',
        price:'',
        url:'',
        modal:true
    };
     modalOpen = ()=>{
        this.setState({modal:!this.state.modal})
       this.props.history.push('/')
    };
    render() {
        return (
            <div>
               <Form id={this.props.match.params.id} request={this.props.edit} modal={this.state.modal} closed={this.modalOpen}/>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        edit: (dish,id)=> dispatch(editDishes(dish,id))
    }

};
export default connect(null,mapDispatchToProps) (Edit);
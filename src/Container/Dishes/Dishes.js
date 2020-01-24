import React, {Component} from 'react';
import Card from "../../Components/Card/Card";
import {connect} from "react-redux";
import './Dishes.css'
import Form from "../../Components/Form/form";
import {getDishes, postDishes} from "../../store/action/actionDishes/actionDishes";

class Dishes extends Component {
    state = {
        modal: false
    };
    closed = () => (this.setState({modal: !this.state.modal}));

    componentDidMount() {
        this.props.getDishes()
    }

    render() {
        return (
            <div >
                <div className="wrap-title">
                    <h2>Add new dish</h2>
                    <Form request={this.props.addDish} modal={this.state.modal} closed={this.closed}/>
                    <button onClick={this.closed}><i style={{fontSize: '60px'}} className="fas fa-plus-square"></i>
                    </button>
                </div>


                <div className="list">
                    {this.props.loading }
                {this.props.dishes && Object.keys(this.props.dishes).map((key) => {
                    return <Card
                        title={this.props.dishes[key].title}
                        price={this.props.dishes[key].price}
                        url={this.props.dishes[key].url}
                        key={key}
                        id={key}
                    />
                })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes.dishes,
        loading: state.dishes.loading
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDishes: () => dispatch(getDishes()),
        addDish: (value) => dispatch(postDishes(value))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
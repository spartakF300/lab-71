import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteOrders, getOrders} from "../../store/action/actionOrders/actionOrders";
import {getDishes} from "../../store/action/actionDishes/actionDishes";
import './Order.css'


class Orders extends Component {

    componentDidMount() {
        this.props.getOrder();
        this.props.getDishes();

    }
delivery = 150;
    render() {
        return (
            <div>
                <h2>Orders</h2>
                {this.props.loading && <div>Loading...</div>}
                {this.props.orders && this.props.dishes !== null ? Object.keys(this.props.orders).map((key) => {
                    return (
                        <div key={key}>
                            <div className="wrap-order"><span>Quantity: {this.props.orders[key]}X</span>
                                <span>Cost: {this.props.dishes[key].price} KGS</span>
                                <span> Name: {this.props.dishes[key].title}</span>
                                <span>Delivery: {this.delivery}</span>
                                <span>Total: {this.props.dishes[key].price * this.props.orders[key] + this.delivery}</span>
                                <button onClick={()=>{this.props.remove(key)}}>
                                    <i style={{fontSize:'40px'}} className="fas fa-trash-alt"></i>
                                </button>
                            </div>


                        </div>
                    )
                }) : null }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        dishes: state.dishes.dishes
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getOrder: () => dispatch(getOrders()),
        getDishes: () => dispatch(getDishes()),
        remove: (id)=> dispatch(deleteOrders(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
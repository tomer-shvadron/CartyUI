import React, {Component} from 'react';

import './CartItemsList.css';
import CartItem from "./CartItem/CartItem";

class CartItemsList extends Component {
    render() {
        var cartItems = this.props.items.map((item, index) => {
            return (<CartItem item={item} key={`cart-${this.props.cartId}-item-${index}`}/>);
        });

        return (
            <div className="cart-items-list">
                {cartItems}
            </div>
        );
    }
}

export default CartItemsList;
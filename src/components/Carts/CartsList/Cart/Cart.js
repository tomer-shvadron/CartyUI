import React, {Component} from 'react';

import './Cart.css';
import CartDetails from "./CartDetails/CartDetails";
import CartItemsList from "./CartItemsList/CartItemsList";

class Cart extends Component {
    render() {
        return (
            <div className="cart centered bottom-space">
                <CartDetails cart={this.props.cart}/>
                <CartItemsList items={this.props.cart.items} cartId={this.props.cart.id}/>
            </div>
        );
    }
}

export default Cart;
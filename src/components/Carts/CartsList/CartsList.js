import React, {Component} from 'react';

import './CartsList.css';
import Cart from './Cart/Cart'

class CartsList extends Component {
    render() {
        var carts = this.props.carts.map((cart, index) => {
            return (<Cart cart={cart} key={`cart-${index}`}/>);
        });

        return (
            <div className="carts-list">
                {carts}
            </div>
        );
    }
}

export default CartsList;
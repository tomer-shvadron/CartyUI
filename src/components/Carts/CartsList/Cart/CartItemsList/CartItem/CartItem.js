import React, {Component} from 'react';

import './CartItem.css';

class CartItem extends Component {
    render() {
        var currency = this.props.item.currency || '$';

        return (
            <div className="cart-item">
                <span className="item-name bold">{this.props.item.name}</span>
                <span className="item-price">{`${currency} ${this.props.item.price}`}</span>
            </div>
        );
    }
}

export default CartItem;
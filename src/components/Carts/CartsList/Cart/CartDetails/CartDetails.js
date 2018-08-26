import moment from 'moment'
import React, {Component} from 'react';

import './CartDetails.css';

class CartDetails extends Component {
    render() {
        var date = new Date(this.props.cart.date.$date);

        return (
            <div className="cart-details">
                <h4>{`${this.props.cart.store} on ${moment(date).format('dddd')}, ${moment(date).format('DD/MM/YYYY')}`}</h4>
            </div>
        );
    }
}

export default CartDetails;
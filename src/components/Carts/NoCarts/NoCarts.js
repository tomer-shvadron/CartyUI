import React, {Component} from 'react';

import './NoCarts.css';

class NoCarts extends Component {
    render() {
        return (
            <div className="no-carts">
                <h3>There are no past carts to show. Add one now!</h3>
            </div>
        );
    }
}

export default NoCarts;
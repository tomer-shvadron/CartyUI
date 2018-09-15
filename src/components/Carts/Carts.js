import React, {Component} from 'react';

import './Carts.css';
import NoCarts from './NoCarts/NoCarts';
import CartsList from './CartsList/CartsList';
import CartsHeader from './CartsHeader/CartsHeader';
import CartsService from '../../services/CartsService';
import LoadingIndication from '../LoadingIndication/LoadingIndication';

class Carts extends Component {
    constructor(props) {
        super(props);

        this.state = {carts: [], loading: true};
    }

    componentDidMount() {
        CartsService.getAllCarts()
            .then(carts => this.setState({carts: carts.data, loading: false}));
    }

    render() {
        return (
            <div className="carts centered">
                <CartsHeader/>
                <LoadingIndication isLoading={this.state.loading}/>
                {
                    !this.state.loading && (
                        this.state.carts.length > 0
                            ? <CartsList carts={this.state.carts}/>
                            : <NoCarts/>
                    )
                }
            </div>
        );
    }
}

export default Carts;
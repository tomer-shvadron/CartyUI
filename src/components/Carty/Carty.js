import React, {Component} from 'react';

import './Carty.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';

class Carty extends Component {
    render() {
        return (
            <div className="carty">
                <Header/>
                <Navbar/>
                <Content/>
            </div>
        );
    }
}

export default Carty;
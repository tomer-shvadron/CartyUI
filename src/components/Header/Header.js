import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="carty-header">
                <h1 className="carty-main-title">Carty</h1>
                <h4>Your online shopping list</h4>
            </header>
        );
    }
}

export default Header;
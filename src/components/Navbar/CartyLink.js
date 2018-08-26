import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class CartyLink extends Component {
    render() {
        var route = this.props.route;

        return (
            <li className={route.classes}>
                <NavLink to={route.path} exact={route.exact} activeClassName="active">
                    {route.text}
                </NavLink>
            </li>
        );
    }
}

export default CartyLink;
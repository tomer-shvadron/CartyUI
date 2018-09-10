import React, {Component} from 'react';

import './Navbar.css';
import Consts from '../../Consts';
import CartyLink from "./CartyLink";
import UserService from '../../services/UserService';
import WelcomeGreeting from './WelcomeGreeting/WelcomeGreeting'

class Navbar extends Component {
    render() {
        var routes = UserService.isLoggedIn() ? Consts.ROUTES.LOGGED_IN_ROUTES : Consts.ROUTES.LOGGED_OUT_ROUTES;

        return (
            <ul className="carty-navbar bold">
                {
                    routes.map(routeId => {
                        var route = Consts.ROUTES.ALL_ROUTES.find(possibleRoute => possibleRoute.id === routeId);

                        return (<CartyLink key={routeId} route={route}/>);
                    })
                }

                {UserService.isLoggedIn() && <WelcomeGreeting/>}
            </ul>
        );
    }
}

export default Navbar;
import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import './Content.css'
import Home from '../Home/Home';
import Carts from '../Carts/Carts';
import requireCondition from './requireCondition';
import Login from '../UserActivity/Login';
import Logout from '../UserActivity/Logout';
import UserService from '../../services/UserService';

class Content extends Component {
    constructor(props) {
        super(props);

        var mustBeLoggedIn = UserService.isLoggedIn;
        var mustBeLoggedOut = UserService.isLoggedOff;

        this.state = {
            carts: requireCondition(Carts, mustBeLoggedIn),
            login: requireCondition(Login, mustBeLoggedOut),
            logout: requireCondition(Logout, mustBeLoggedIn)
        };
    }

    render() {
        return (
            <div className="container">
                <Route exact path="/" component={Home}/>
                <Route path="/carts" component={this.state.carts}/>
                <Route path="/login" component={this.state.login}/>
                <Route path="/logout" component={this.state.logout}/>
            </div>
        );
    }
}

export default Content;
import React, {Component} from 'react';

import './WelcomeGreeting.css'
import UserService from '../../../services/UserService';

class WelcomeGreeting extends Component {
    render() {
        var name = UserService.getName();

        return (
            <li className="right welcome-greeting">
                <a>Welcome, {name}!</a>
            </li>
        );
    }
}

export default WelcomeGreeting;
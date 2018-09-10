import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './Login.css';
import LoginForm from './LoginForm';
import UserService from '../../services/UserService';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {email: '', password: ''};
    }

    handleEmailChange = event => this.setState({email: event.target.value});

    handlePasswordChange = event => this.setState({password: event.target.value});

    handleSubmit = event => {
        event.preventDefault();

        var credentials = {
            email: this.state.email,
            password: this.state.password
        };

        UserService.login(credentials, () => this.props.history.push('/carts'));
    };

    render() {
        return (
            <div className="login centered">
                <LoginForm email={this.state.email}
                           password={this.state.password}
                           handleEmailChange={this.handleEmailChange}
                           handlePasswordChange={this.handlePasswordChange}
                           handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default withRouter(Login);
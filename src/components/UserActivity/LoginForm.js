import React, {Component} from 'react';

class LoginForm extends Component {
    render() {
        return (
            <form className="login-form" onSubmit={this.props.handleSubmit}>
                <label className="login-label bold" htmlFor="email">Email</label>

                <input type="text" id="email" value={this.props.email} placeholder="Enter Email"
                       className="login-input bottom-space" onChange={this.props.handleEmailChange}/>

                <label className="login-label bold" htmlFor="psswrd">Password</label>

                <input type="password" id="psswrd" value={this.props.password} placeholder="Enter Password"
                       className="login-input bottom-space" onChange={this.props.handlePasswordChange}/>

                <input type="submit" className="login-submit bold" value="Login"/>
            </form>
        );
    }
}

export default LoginForm;
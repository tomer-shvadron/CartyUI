import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import Consts from "../../Consts";
import StorageService from '../../services/StorageService';

class Logout extends Component {
    render() {
        StorageService.remove(Consts.USER_KEY);
        return (<Redirect to="/"/>);
    }
}

export default Logout;
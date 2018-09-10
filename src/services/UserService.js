import Consts from '../Consts';
import AjaxService from './AjaxService';
import StorageService from './StorageService';

var UserService = {
    isLoggedIn: () => StorageService.exists(Consts.USER_KEY),

    isLoggedOff: () => !StorageService.exists(Consts.USER_KEY),

    getName: () => (StorageService.get(Consts.USER_KEY)).name,

    getUser: () => (StorageService.get(Consts.USER_KEY)).user,

    login: (credentials, callback) => {
        AjaxService
            .post(`${Consts.BASE_URL}/login`, credentials)
            .then(result => {
                var userData = {
                    name: result.data.name,
                    user: result.data.email,
                    token: result.data.token
                };

                StorageService.set(Consts.USER_KEY, userData);

                callback();
            });
    }
};

export default UserService;
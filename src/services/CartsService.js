import Consts from '../Consts';
import AjaxService from './AjaxService';
import UserService from './UserService';

var CartsService = {
    getAllCarts: () => {
        return AjaxService.get(`${Consts.BASE_URL}/carts/${UserService.getUser()}`);
    }
};

export default CartsService;
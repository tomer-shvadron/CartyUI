import Consts from '../Consts';
import AjaxService from './AjaxService';
import UserService from './UserService';

var CartsService = {
    getAllCarts: () => AjaxService.get(`${Consts.BASE_URL}/carts/${UserService.getUser()}`)
};

export default CartsService;
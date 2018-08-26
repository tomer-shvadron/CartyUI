import axios from 'axios';

var AjaxService = {
    get: (url, params) => {
        return axios.get(url, params);
    },

    post: (url, params) => {
        return axios.post(url, params);
    },

    put: (url, params) => {
        return axios.put(url, params);
    },

    delete: (url, params) => {
        return axios.delete(url, params);
    }
};

export default AjaxService;
var StorageService = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },

    get: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },

    exists: (key) => {
        return !!localStorage.getItem(key);
    },

    remove: (key) => {
        localStorage.removeItem(key);
    }
};

export default StorageService;
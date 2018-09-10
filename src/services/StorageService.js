var StorageService = {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),

    get: key => JSON.parse(localStorage.getItem(key)),

    exists: key => !!localStorage.getItem(key),

    remove: key => localStorage.removeItem(key)
};

export default StorageService;
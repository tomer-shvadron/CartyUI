var routesIds = {
    'Index': 1,
    'Carts': 2,
    'Login': 3,
    'Logout': 4
};

var Consts = {
    'USER_KEY': 'carty-user',
    'BASE_URL': 'http://localhost:5000',
    "ROUTES": {
        "ALL_ROUTES": [
            {
                id: routesIds.Index,
                path: "/",
                exact: true,
                text: "Home"
            }, {
                id: routesIds.Carts,
                path: "/carts",
                text: "Carts"
            }, {
                id: routesIds.Login,
                path: "/login",
                text: "Login",
                classes: "right"
            }, {
                id: routesIds.Logout,
                path: "/logout",
                text: "Logout",
                classes: "right"
            }
        ],
        "LOGGED_IN_ROUTES": [routesIds.Index, routesIds.Carts, routesIds.Logout],
        "LOGGED_OUT_ROUTES": [routesIds.Index, routesIds.Login]
    }
};

export default Consts;
// Global
const HOME = "/";           // app.use
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";         // app.use
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";


// Order

const ORDER = "/order";         // app.use
const UPLOAD_ORDER = "/upload";
const ORDER_DETAIL = "/:id";
const EDIT_ORDER = "/:id/edit";
const DELETE_ORDER = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    order: ORDER,
    uploadOrder: UPLOAD_ORDER,
    orderDetail: ORDER_DETAIL,
    editOrder: EDIT_ORDER,
    deleteOrder: DELETE_ORDER
};

export default routes;
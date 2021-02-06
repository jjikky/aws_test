import { Router } from "express";

// Global
const HOME = "/";           // app.use
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
/*

const NAVER = "/auth/naver"
const KAKAO = "/auth/kakao"
const GOOGLE = "/auth/Google"
const FORGET_PASSWORD_EMAIL = ""
const FORGET_PASSWORD_PHONE = ""
*/

//Facebook
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";
const APP_ID = "/appid"

// Users
const USERS = "/users";         // app.use
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";
const BOOKMARK = "/:id/bookmark"


// Order
const ORDER = "/order";         // app.use
const UPLOAD_ORDER = "/upload";
const ORDER_DETAIL = "/:id";
const EDIT_ORDER = "/:id/edit";
const DELETE_ORDER = "/:id/delete";


// API
const API = "/api";
const CURRENT_POSITION = "/current-position"

const routes = {
    home: HOME,             // Global
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,                 // Users
    userDetail: USER_DETAIL,
    bookmark: BOOKMARK,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    order: ORDER,                    // Order
    uploadOrder: UPLOAD_ORDER,
    orderDetail: ORDER_DETAIL,
    editOrder: EDIT_ORDER,
    deleteOrder: DELETE_ORDER,
    api: API,                             // API
    currentPosition: CURRENT_POSITION,
    facebook: FACEBOOK,
    facebookCallback: FACEBOOK_CALLBACK,
    appid: APP_ID,
};


export default routes;
import express from "express";
import routes from "../routes";
import passport from "passport";
import { home, search } from "../controllers/orderController";
import { getJoin, postJoin, getLogin, postLogin, logout, facebookLogin, postFacebookLogIn, appId, postappId } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.facebook, facebookLogin);

globalRouter.get(
    routes.facebookCallback,
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    //appId,
    postFacebookLogIn
);


globalRouter.get(routes.appid, appId);
globalRouter.post(routes.appid, postappId);

globalRouter.get(routes.logout, logout);

export default globalRouter;

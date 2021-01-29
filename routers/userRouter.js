import express from "express";
import routes from "../routes";
import {
    changePassword,
    editProfile,
    userDetail,
    bookmark
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.bookmark, bookmark);

export default userRouter;
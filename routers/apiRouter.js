import express from "express";
import { currentPosition } from "../controllers/userController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.get(routes.currentPosition, currentPosition);

export default apiRouter;
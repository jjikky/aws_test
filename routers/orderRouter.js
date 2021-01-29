import express from "express";
import routes from "../routes";
import {
    uploadOrder,
    orderDetail,
    editOrder,
    deleteOrder
} from "../controllers/orderController";

const orderRouter = express.Router();


orderRouter.get(routes.uploadOrder, uploadOrder);
orderRouter.get(routes.orderDetail, orderDetail);
orderRouter.get(routes.editOrder, editOrder);
orderRouter.get(routes.deleteOrder, deleteOrder);

export default orderRouter;
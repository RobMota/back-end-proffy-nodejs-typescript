import express from "express";
import ClassesController from "./controller/classesController";
import ConnectionController from "./controller/connectionController";

const routes = express.Router();
const ClassControllers = new ClassesController();
const ConnectionControllers = new ConnectionController();


routes.get("/classes", ClassControllers.index);
routes.post("/classes", ClassControllers.create);

routes.post("/connections", ConnectionControllers.create);
routes.get("/connections", ConnectionControllers.index);

export default routes;

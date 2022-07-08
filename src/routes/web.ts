import { Router } from "express";
import homeController from "../controllers/homeController";

const routes: Router = Router();

// All routes here
routes.get('/', homeController.index);

export { routes };

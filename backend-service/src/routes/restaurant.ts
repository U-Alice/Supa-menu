import express, { RequestHandler } from "express";

// import { authorization } from "../controllers/auth";
import { createRestaurantController, getAllRestaurantsController } from "../controllers/restaurant";
import { authorization } from "../controllers/auth";

const router = express.Router();

router.post("/create",  authorization as RequestHandler, createRestaurantController);
router.get("/getAll", authorization as RequestHandler, getAllRestaurantsController);

export default router;

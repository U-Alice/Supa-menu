import { Request, Response } from "express";
import {
  createRestaurant,
  getAllRestaurants,
  updateRestaurant,
} from "../services/restaurant";
import { ApiResponse } from "../types/ApiResponse";
import { Restaurant } from "../types/Restaurant";

export const createRestaurantController = async (
  req: Request,
  res: Response
) => {
  try {
    const restaurant : Restaurant = req.body;
    const response : ApiResponse<Restaurant | string | null> =
      await createRestaurant(restaurant);

    res.status(response.status).json(response);
  } catch (err: any) {
    console.error("Error creating restaurant:", err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: 500,
    });
  }
};

export const getAllRestaurantsController = async (
  req: Request,
  res: Response
) => {
  try {
    const response: ApiResponse<Restaurant[] | null> =
      await getAllRestaurants();
    res.status(response.status).json(response);
  } catch (err: any) {
    console.error("Error fetching restaurants:", err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: 500,
    });
  }
};

export const updateRestaurantController = async (
  req: Request,
  res: Response
) => {
  try {
    const id: string = req.params.id;
    const updatedRestaurant: Partial<Restaurant> = req.body;
    const response: ApiResponse<Restaurant | null> = await updateRestaurant(
      updatedRestaurant,
      id
    );

    res.status(response.status).json(response);
  } catch (err: any) {
    console.error("Error updating restaurant:", err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      status: 500,
    });
  }
};

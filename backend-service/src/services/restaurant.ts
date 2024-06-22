import { Restaurant } from "@prisma/client";
import { prisma } from "../utils/db";
import { ApiResponse } from "../types/ApiResponse";
import { createRestaurantValidation } from "../utils/validation";

export const createRestaurant = async (
  restaurant: any
): Promise<ApiResponse<Restaurant | string | null>> => {
  try {
    const { error } = createRestaurantValidation(restaurant);
    if (error) {
      return {
        success: false,
        status: 400,
        message: "Validation error: " + error.details[0].message,
        data: null,
      };
    }

    const foundRestaurant = await prisma.restaurant.findFirst({
      where: { name: restaurant.name },
    });

    if (foundRestaurant) {
      return {
        success: false,
        status: 400,
        message: "Restaurant already exists!",
        data: null,
      };
    }

    const newRestaurant = await prisma.restaurant.create({
      data: {
        name: restaurant.name,
        address: restaurant.address,
        phone: restaurant.phone,
      },
    });

    let apiResponse: ApiResponse<Restaurant> = {
      message: "Restaurant created successfully!",
      success: true,
      status: 201,
      data: newRestaurant,
    };
    return apiResponse;
  } catch (err: any) {
    let apiResponse: ApiResponse<null> = {
      message: err.message,
      success: false,
      status: 500,
    };
    console.log(err);
    return apiResponse;
  }
};

export const getAllRestaurants = async (): Promise<
  ApiResponse<Restaurant[] | null>
> => {
  try {
    const restaurants = await prisma.restaurant.findMany();
    let apiResponse: ApiResponse<Restaurant[]> = {
      message: "Data retrieved successfully!",
      success: true,
      status: 200,
      data: restaurants,
    };
    return apiResponse;
  } catch (err: any) {
    let apiResponse: ApiResponse<null> = {
      message: err.message,
      success: false,
      status: 500,
    };
    console.log(err);
    return apiResponse;
  }
};

export const updateRestaurant = async (
  updatedRestaurant: Partial<Restaurant>,
  id: string
): Promise<ApiResponse<Restaurant | null>> => {
  try {
    const { error } = createRestaurantValidation(updatedRestaurant);
    if (error) {
      return {
        success: false,
        status: 400,
        message: "Validation error: " + error.details[0].message,
        data: null,
      };
    }

    const restaurant = await prisma.restaurant.update({
      where: { id },
      data: updatedRestaurant,
    });

    let apiResponse: ApiResponse<Restaurant> = {
      message: "Restaurant updated successfully!",
      success: true,
      status: 200,
      data: restaurant,
    };
    return apiResponse;
  } catch (err: any) {
    let apiResponse: ApiResponse<null> = {
      message: err.message,
      success: false,
      status: 500,
    };
    console.log(err);
    return apiResponse;
  }
};

import { ApiResponse } from "../utils/ApiResponse.js";
import { registerService } from "./auth.service.js";

export async function handleRegister(req, res) {
  try {
    const { user } = req.body;

    if (!user) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "User object is required"));
    }

    const createdUser = await registerService(user);

    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          createdUser,
          "User created successfully"
        )
      );
  } catch (error) {
    console.error(error);

    const statusCode = error.statusCode || 500;

    return res
      .status(statusCode)
      .json(
        new ApiResponse(
          statusCode,
          null,
          error.message || "Internal Server Error"
        )
      );
  }
}
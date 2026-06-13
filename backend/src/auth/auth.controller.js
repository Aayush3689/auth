import { ApiResponse } from "../utils/ApiResponse.js";
import { userModel } from "./auth.model.js";
import { loginService, registerService } from "./auth.service.js";

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
      .json(new ApiResponse(201, createdUser, "User created successfully"));
  } catch (error) {
    console.error(error);

    const statusCode = error.statusCode || 500;

    return res
      .status(statusCode)
      .json(
        new ApiResponse(
          statusCode,
          null,
          error.message || "Internal Server Error",
        ),
      );
  }
}

export async function handleLogin(req, res) {
  const { email } = req.body ?? {};

  if (!email) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Email is required"));
  }

  try {

    const user = await loginService(email);

    if (!user) {
      return res
        .status(404)
        .json(
          new ApiResponse(404, null, "User does not exist permission denied"),
        );
    }

    return res
      .status(200)
      .json(new ApiResponse(200, user, "logged in successful"));
  } catch (error) {
    console.error("error while login", error);

    const statusCode = error.statusCode || 500;
    return res
      .status(statusCode)
      .json(
        new ApiResponse(
          statusCode,
          null,
          error.message || "Internal Server Error",
        ),
      );
  }
}

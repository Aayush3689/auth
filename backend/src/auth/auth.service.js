import { userModel } from "../auth/auth.model.js";
import { ApiError } from "../utils/ApiError.js";

export async function registerService(user) {
  if (!user) {
    throw new ApiError(400, "User data is required");
  }

  const existingUser = await userModel.findOne({
    email: user.email,
  });

  if (existingUser) {
    throw new ApiError(409, "Email already exists");
  }

  const createdUser = await userModel.create(user);

  console.log("User created:", createdUser._id);

  return createdUser;
}
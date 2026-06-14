import mongoose from "mongoose";

export const connectDb = async (uri) => {
  if (!uri) {
    throw new Error("mongo uri is required");
  }

  console.log("uri", uri);

  try {
    await mongoose.connect(uri, {
      dbName: "practice_user",
    });

    console.log("Mongodb connected successfully");
  } catch (error) {
    console.error("database connection error", error);
    throw error;
  }
};

import { createApp } from "./app.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: ".env.development",
  });
}

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.MONGO_URI;

(async () => {
  try {
    await connectDb(DB_URI);

    const app = createApp();

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    server.on("error", (err) => {
      console.error("Server error:", err);
      process.exit(1);
    });
  } catch (error) {
    console.error("Cannot start application:", error);
    process.exit(1);
  }
})();

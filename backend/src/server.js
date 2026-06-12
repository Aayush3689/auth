import { createApp } from "./app.js";
import { connectDb } from "./config/db.js";

const PORT = 8000;
const DB_URI = "mongodb://mongodb:27017";

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
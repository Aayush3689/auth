import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "./loader/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // register router
  registerRoutes(app);

  app.get("/", (rea, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/health", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Healthy",
      uptime: process.uptime(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString("en-IN"),
    });
  });

  return app;
};

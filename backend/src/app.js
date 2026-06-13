import express from "express";
import { registerRoutes } from "./loader/routes.js";

export const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // register router
  registerRoutes(app);

  app.get("/", (rea, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome to the server",
    });
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

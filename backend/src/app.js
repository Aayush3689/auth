import express from "express";
import { registerRoutes } from "./loader/routes.js";

export const createApp = () => {
  const app = express();


  // middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // register router
  registerRoutes(app)

  return app;
}

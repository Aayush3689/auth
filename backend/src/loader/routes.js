import { router as authRoute } from "../auth/auth.router.js";

export const registerRoutes = (app) => {
  app.use("/api/auth", authRoute);
};

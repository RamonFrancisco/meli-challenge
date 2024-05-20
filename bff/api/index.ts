import express, { Express, json } from "express";
import cors from "cors";
import { setupRoutes } from "./config/routes";

export const setupApp = (): Express => {
  const app = express();

  // Middlewares
  app.use(
    cors({
      origin: "*",
      methods: ["GET"],
      allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    })
  );
  app.use(json());
  app.use(express.urlencoded({ extended: true }));

  setupRoutes(app);

  return app;
};

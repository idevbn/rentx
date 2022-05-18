import "reflect-metadata";
import { AppError } from "@errors/AppError";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "routes";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json";

import "./database";

import "@shared/container";

const app = express();

const url = "http://localhost:";
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log(
    `Server is running on port ${PORT}\nGet access here: ${url}${PORT}`
  );
});

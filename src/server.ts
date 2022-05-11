import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

const url = "http://localhost:";
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello World!" });
});

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => {
  console.log(
    `Server is running on port ${PORT}\nGet access here: ${url}${PORT}`
  );
});

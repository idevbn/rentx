import express from "express";
import { router } from "routes";

const app = express();

const url = "http://localhost:";
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log(
    `Server is running on port ${PORT}\nGet access here: ${url}${PORT}`
  );
});

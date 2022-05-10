import express from "express";

const app = express();

const url = "http://localhost:";
const PORT = process.env.PORT || 3333;

app.get("/", (request, response) => {
  return response.json({ message: "Hello World!" });
});

app.listen(3333, () => {
  console.log(
    `Server is running on port ${PORT}\nGet access here: ${url}${PORT}`
  );
});

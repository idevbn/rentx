import { app } from "./app";

const url = "http://localhost:";
const PORT = process.env.PORT || 3333;

app.listen(3333, () => {
  console.log(
    `Server is running on port ${PORT}\nGet access here: ${url}${PORT}`
  );
});

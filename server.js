const express = require("express");
require("dotenv").config();
const cors = require("cors");

console.log(process.env.PORT);
const router = require("./Router");

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server Running at Port: ${port}`);
});

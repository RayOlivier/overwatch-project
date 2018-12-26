require("dotenv").config();

const express = require("express");
const { json } = require("body-parser");

const app = express();

app.use(json());

const port = 3001;
app.listen(port, () => {
  console.log(`Overwatchy Server listening on port ${port}`);
});

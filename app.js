"use strict";
const path = require("path");
const express = require("express");

const app = express();
const port = 5000;

app.use(express.static('public'))

app.set("view engine", "ejs");

app.use("/", require("./routes/pages.js"));

app.listen(port);
console.log(`Server is listening on port ${port}`);
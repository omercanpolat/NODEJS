// app.js

"use strict";

/* -------------------------------------------------------
    EXPRESSJS - USERS MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const User = require("./models/user");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost/user-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

app.use(require("../user-api/models/user.router"));

// User modelini tanımlayalım (models/user.js)
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Diğer kullanıcı alanlarını da ekleyebiliriz.
});

const User = mongoose.model("User", userSchema);

/* ------------------------------------------------------- */
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

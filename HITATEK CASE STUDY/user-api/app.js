// app.js
"use strict";

/* -------------------------------------------------------
    EXPRESSJS - USERS MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

/* ------------------------------------------------------- */

// Accept json data:
app.use(express.json())

// Connect to MongoDB with Mongoose:
require('../user-api/dbConnection')

// HomePage:
app.all('/', (req, res) => {
    res.send('WELCOME TO USERS MANAGEMENT API')
})

// Routes:
app.use('/users', require('./routes/router'))

// errorHandler:
app.use(require('../user-api/errorHandler'))


/* ------------------------------------------------------- */
const bodyParser = require("body-parser");
const User = require("./models/user");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* ------------------------------------------------------- */



app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
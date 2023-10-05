"use strict"
/* -------------------------------------------------------
    EXPRESSJS - USERS Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')


mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
"use strict";

/* -------------------------------------------------------
    EXPRESSJS - USERS MANAGEMENT
------------------------------------------------------- */

const mongoose = require('mongoose')

// User modelini tanımlayalım (models/user.js)
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
    },
    // createdAt
    // updatedAt

    // Diğer kullanıcı alanlarını da ekleyebiliriz.
  },
  { collection: "users", timestamps: true }
);

module.exports = {User: mongoose.model("User", userSchema)}
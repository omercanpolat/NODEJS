"use strict";

/* -------------------------------------------------------
    EXPRESSJS - USERS MANAGEMENT
------------------------------------------------------- */

const mongoose = require('mongoose')
const passwordEncrypt = require("../helpers/passwordEncrypt");

// User modelini tanımlayalım (models/user.js)
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
      lastName: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Email field must be required.'],
      validate: [
            (email) => (email.includes('@') && email.includes('.')), // ValidationCheck
            'Error type is incorrect.' // If false Message.
    ]},


    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
    },

    // createdAt
    // updatedAt

    // Diğer kullanıcı alanlarını da ekleyebiliriz.
  },
  { collection: "users", timestamps: true }
);

module.exports = {User: mongoose.model("User", userSchema)}
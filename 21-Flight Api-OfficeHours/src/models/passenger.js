"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Passenger Model:

const PassengerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Not Declare"],
    },

    email: {
      type: String,
      trim: true,
      required: [true, "Email field must be required"],
      unique: [true, "There is this email. Email field must be unique"],
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Email type is not correct.",
      ],
    },

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    collection: "passengers",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Passenger", PassengerSchema);

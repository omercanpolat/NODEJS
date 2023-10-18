"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Flight Model:

const FlightSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    airline: {
      type: String,
      trim: true,
      required: true,
    },

    departureCity: {
      type: BigInt,
      required: true,
    },

    departureDate: {
      type: Date,
      required: true,
    },

    arrivalCity: {
      type: BigInt,
      required: true,
    },

    arrivalDate: {
      type: Date,
      required: true,
    },

    passengers: [
      // push, pull
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Passenger",
      },
    ],

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    collection: "flights",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Flight", FlightSchema);

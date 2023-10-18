"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// Reservation Model:

const ReservationSchema = new mongoose.Schema(
  {
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
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
    collection: "reservations",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Reservation", ReservationSchema);

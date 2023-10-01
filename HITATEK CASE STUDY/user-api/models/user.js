
"use strict";

/* -------------------------------------------------------
    EXPRESSJS - USERS MANAGEMENT
------------------------------------------------------- */

//* SEQUELIZE

const { Sequelize, DataTypes } = require("sequelize");
// Where is DB (DB Connection Details):
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
const sequelize = new Sequelize(
  "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
);


const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING(64), // varchar(64)
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(64),
    allowNull: false
  },

  // createdAt: false, // Unset
  // updatedAt: false, // Unset
});


// Connect:
sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch((err) => console.log("* DB Not Connected *", err));

module.exports = User;
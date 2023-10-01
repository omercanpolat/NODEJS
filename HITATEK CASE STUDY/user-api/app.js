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

// User modelini tanımlayın (models/user.js)
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Diğer kullanıcı alanlarını ekleyebilirsiniz.
});

const User = mongoose.model("User", userSchema);

// // Kullanıcıları ekleme işlemi
// app.post("/api/users", (req, res) => {
//   const newUser = new User(req.body);
//   newUser.save((err, user) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(201).json(user);
//     }
//   });
// });

// // Kullanıcıları listeleme işlemi (pagination ve arama dahil)
// app.get("/api/users", async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 10;
//   const search = req.query.search || "";

//   const skip = (page - 1) * limit;
//   const query = { name: { $regex: search, $options: "i" } };

//   try {
//     const users = await User.find(query).skip(skip).limit(limit).exec();

//     const totalCount = await User.countDocuments(query).exec();

//     const totalPages = Math.ceil(totalCount / limit);

//     res.json({
//       users,
//       page,
//       totalPages,
//       totalCount,
//     });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Kullanıcıları güncelleme işlemi
// app.put("/api/users/:userId", (req, res) => {
//   User.findByIdAndUpdate(
//     req.params.userId,
//     req.body,
//     { new: true },
//     (err, user) => {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         res.json(user);
//       }
//     }
//   );
// });

// // Kullanıcıları silme işlemi
// app.delete("/api/users/:userId", (req, res) => {
//   User.findByIdAndRemove(req.params.userId, (err, user) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.json({ message: "Kullanıcı başarıyla silindi", user });
//     }
//   });
// });


/* ------------------------------------------------------- */
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

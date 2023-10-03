"use strict";
/* -------------------------------------------------------
    EXPRESSJS - USER Project with Sequelize
------------------------------------------------------- */
const router = require("express").Router();

const User = require("../models/user");

// LIST:

// Kullanıcıları listeleme işlemi (pagination ve arama dahil)
router.get("/api/users", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search || "";

  const skip = (page - 1) * limit;
  const query = { name: { $regex: search, $options: "i" } };

  try {
    const users = await User.find(query).skip(skip).limit(limit).exec();

    const totalCount = await User.countDocuments(query).exec();

    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      users,
      page,
      totalPages,
      totalCount,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});


// Kullanıcıları ekleme işlemi
router.post("/api/users", (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(user);
    }
  });
});


// Kullanıcıları güncelleme işlemi
router.put("/api/users/:userId", (req, res) => {
  User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json(user);
      }
    }
  );
});


// Kullanıcıları silme işlemi
router.delete("/api/users/:userId", (req, res) => {
  User.findByIdAndRemove(req.params.userId, (err, user) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ message: "Kullanıcı başarıyla silindi", user });
    }
  });
});

module.exports = router;
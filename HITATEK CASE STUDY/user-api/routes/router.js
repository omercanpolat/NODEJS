"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

// Call Controllers:
const { User } = require('../controllers/controller')

// ------------------------------------------
// User
// ------------------------------------------
router.route('/post')
    .get(User.list)
    .post(User.create)

router.route('/post/:postId')
    .get(User.read)
    .put(User.update)
    .delete(User.delete)

module.exports = router
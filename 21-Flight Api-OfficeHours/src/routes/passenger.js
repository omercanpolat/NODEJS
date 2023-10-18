"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/passenger:

const permissions = require('../middlewares/permissions')
const passenger = require('../controllers/passenger')

// URL: /passengers

// router.route('/')
//     .get(permissions.isAdmin, passenger.list)
//     .post(permissions.isAdmin, passenger.create)

// router.route('/:id')
//     .get(permissions.isAdmin, passenger.read)
//     .put(permissions.isAdmin, passenger.update)
//     .patch(permissions.isAdmin, passenger.update)
//     .delete(permissions.isAdmin, passenger.delete)

router.use(permissions.isAdmin)

router.route('/')
    .get(passenger.list)
    .post(passenger.create)

router.route('/:id')
    .get(passenger.read)
    .put(passenger.update)
    .patch(passenger.update)
    .delete(passenger.delete)

/* ------------------------------------------------------- */
module.exports = router
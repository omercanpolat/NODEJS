"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/reservation:

const permissions = require('../middlewares/permissions')
const reservation = require('../controllers/reservation')

// URL: /reservations

// router.route('/')
//     .get(permissions.isLogin, reservation.list)
//     .post(permissions.isLogin, reservation.create)

// router.route('/:id')
//     .get(permissions.isLogin, reservation.read)
//     .put(permissions.isLogin, rder.update)
//     .patch(permissions.isLogin, reservation.update)
//     .delete(permissions.isAdmin, reservation.delete)

router.use(permissions.isLogin)

router.route('/')
    .get(reservation.list)
    .post(reservation.create)

router.route('/:id')
    .get(reservation.read)
    .put(reservation.update)
    .patch(reservation.update)
    .delete(permissions.isAdmin, reservation.delete)

/* ------------------------------------------------------- */
module.exports = router
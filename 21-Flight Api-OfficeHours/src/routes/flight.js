"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/flight:

const permissions = require('../middlewares/permissions')
const flight = require('../controllers/flight')

// URL: /flights

router.route('/')
    .get(flight.list)
    .post(permissions.isAdmin, flight.create)

router.route('/:id')
    .get(flight.read)
    .put(permissions.isAdmin, flight.update)
    .patch(permissions.isAdmin, flight.update)
    .delete(permissions.isAdmin, flight.delete)

router.put('/:id/pushPassengers', permissions.isAdmin, flight.pushPassengers)
router.put('/:id/pullPassengers', permissions.isAdmin, flight.pullPassengers)

/* ------------------------------------------------------- */
module.exports = router
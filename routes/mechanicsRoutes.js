const express = require("express");

const router = express.Router();
const fs = require("fs");

const mechanicsController = require("./../controllers/mechanicsController")
const authController = require("../controllers/authController")

router.use(authController.protect);

router
.route('/')
.get(authController.restrictTo("user"),mechanicsController.getAllMechanics)
.post(mechanicsController.createMechanic)

router
.route('/:id')
.get(mechanicsController.getMechanicById)
.patch(mechanicsController.updateMechanic)
.delete(mechanicsController.deleteMechanic)

module.exports = router;
const express = require('express');
const router = express.Router();
const vehiclesController = require("../controllers/vehicles");


router.post("/", vehiclesController.createOne)
router.get("/", vehiclesController.getAll);
router.get("/:id", vehiclesController.getOneId);
router.get("/name/:name", vehiclesController.getAllName);
router.patch("/:id", vehiclesController.changeOne)
router.delete("/:id", vehiclesController.removeOne)

module.exports = router;

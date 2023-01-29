

const express = require('express');
//! express router - construtor de rotas do express
const router = express.Router();
//! importação das regras de negócio, o que a chamada vai fazer
const customersController = require("../controllers/customers");
// criar um cliente
router.post("/", customersController.createOne)

// recuperar todos os clientes
router.get("/", customersController.getAll);

// recuperar um cliente em específico
router.get("/:id", customersController.getOne);

// atualizar um cliente
router.patch("/:id", customersController.changeOne)

// remover um cliente
router.delete("/:id", customersController.removeOne)

module.exports = router;


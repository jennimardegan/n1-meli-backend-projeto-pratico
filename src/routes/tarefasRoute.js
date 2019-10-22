const express = require('express')
const router = express.Router()
const controller = require('../controllers/tarefasController')

router.get('/', controller.getTarefas)
router.get('/:id', controller.getById) //:id = "criando" uma variável

//nomes após / é o que será digitado na URL para busca
module.exports = router
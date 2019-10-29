const express = require('express')
const router = express.Router()
const controller = require('../controllers/tarefasController')

router.get('/', controller.getTarefas)
router.get('/concluidos', controller.getConcluidas)
router.get('/:id', controller.getById) //:id = "criando" uma variável
router.get('/colaborador/:nome', controller.getByName)

//nomes após / é o que será digitado na URL para busca
module.exports = router
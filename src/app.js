const express = require('express')
const app = express()

//rotas
const index = require('./routes/index')
const tarefas = require('./routes/tarefasRoute')

app.all('*', function(req, res, next){ //exemplo de aplicação: verificar quantidade de acessos
    console.log('Passando pelo app')
    next() // next = passa para a próxima aplicação.
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") // adicionado para funcionar exemplo site (reprograma)
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use('/', index)
app.use('/tarefas', tarefas)

module.exports = app
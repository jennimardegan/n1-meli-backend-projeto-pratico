const tarefas = require('../model/tarefas.json')

exports.getTarefas = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    console.log(id)
    if (id > 5 || id <= 0) {
        res.send('ID não localizado')
    }
    res.status(200).send(tarefas.find(tarefas => tarefas.id == id))
}

exports.getConcluidas = (req, res) => {
    const concluidas = tarefas.filter(tarefas => tarefas.concluido == "true") 
    
    res.status(200).send(concluidas)
}

exports.getByName = (req, res) => {
    const nome = req.params.nome
    console.log(nome)
    
    res.status(200).send(tarefas.filter(tarefa => tarefa.nomeColaborador == nome))
}

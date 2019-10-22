const tarefas = require('../model/tarefas.json')

exports.getTarefas = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    console.log(id)
    if (id > 4 || id <= 0) {
        res.send('ID não localizado')
    }
    res.status(200).send(tarefas.find(tarefas => tarefas.id == id))
}


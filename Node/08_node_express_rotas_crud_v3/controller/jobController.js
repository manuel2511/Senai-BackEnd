const jobModel = require("../models/jobModels.js");

class JobController {
  readList(req, res) {
    try {
      let ArrayTodosJobos = jobModel.readList();
      if (ArrayTodosJobos) {
        res.status(200).json(ArrayTodosJobos);
      } else {
        res.status(404).send("Nenhuma vaga de emprego foi encontrada");
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  read (req, res) {
    try {
        const { id } = req.params;
        let ArrayJobosId = jobModel.read(id);
        if (ArrayJobosId) {
            res.status(200).json(ArrayJobosId);
        }else{
            res.status(404).send("Vaga de emprego não encontrada!");
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}
create (req, res) {
    try {
        const newJob = req.body;
        jobModel.create(newJob);
        res.status(201).send("Vaga de emprego criada com sucesso!");
    } catch (error) {
        res.status(400).json(error.message);
    }
}
update (req, res) {
    try {
        const { id } = req.params;
        const updateJob = req.body;
        let atualizaJob = jobModel.update(updateJob, id);
        if (atualizaJob) {
            res.status(200).json("Vaga de emprego atualizada com sucesso!");
        } else {
            res.status(404).send("Vaga de emprego não encontrada");
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}
delete (req, res) {
    try {
        const { id } = req.params;
        let apagaJob = jobModel.delete(id);
        if (apagaJob) {
            res.status(200).json("Vaga de emprego deletada com sucesso!");
        } else {
            res.status(404).send("Vaga de emprego não encontrada");
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}
}
module.exports = new JobController();

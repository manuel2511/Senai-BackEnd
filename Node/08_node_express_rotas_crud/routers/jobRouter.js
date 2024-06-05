const Router = require("express").Router;

const router = Router();

class Job {
    constructor(jobs){
        this.jobs = jobs;
    }
    readList(){
        return [this.jobs];
    }
    read(id){
        const job = this.jobs.find((job) => job.id === parseInt(id) );
        return job;
    }
    create(newJob){
        const index = this.jobs.findIndex((job) => job.id === parseInt(newJob.id) );
        this.jobs.push(newJob);
        return newJob;
    }
    update(updateJob, id){
        const index = this.jobs.findIndex((job) => job.id === parseInt(id) );
        if (index !== -1 ) {
            this.jobs[index] = updateJob;
            return this.jobs[index];
        }

        return false;
    }
    delete(id){
        const index = this.jobs.findIndex((job) => job.id === parseInt(id) );
        if (index !== -1 ) {
            this.jobs.splice(index, 1);
            return true;
        }
        return false;
    }
}

let jobs = new Job([
    {id: 1, nome: "Desenvolvedor Back End", salario: 1500.00},
    {id: 2, nome: "Desenvolvedor Front End", salario: 1500.00},
    {id: 3, nome: "Desenvolvedor Full Stack", salario: 2000.00},

]);

router.get(
    "/job",
    function (req, res) {
        try {
            let ArrayTodosJobos = jobs.readList();
            if (ArrayTodosJobos) {
                res.status(200).json(ArrayTodosJobos);
            }else{
                res.status(404).send("Nenhuma vaga de emprego foi encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);
router.get(
    "/job/:id",
    function (req, res) {
        try {
            const { id } = req.params;
            let ArrayJobosId = jobs.read(id);
            if (ArrayJobosId) {
                res.status(200).json(ArrayJobosId);
            }else{
                res.status(404).send("Vaga de emprego não encontrada!");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);
router.post(
    "/job",
    function (req, res) {
        try {
            const newJob = req.body;
            jobs.create(newJob);
            res.status(201).send("Vaga de emprego criada com sucesso!");
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);
router.put(
    "/job/:id",
    function (req, res) {
        try {
            const { id } = req.params;
            const updateJob = req.body;
            let atualizaJob = jobs.update(updateJob, id);
            if (atualizaJob) {
                res.status(200).json("Vaga de emprego atualizada com sucesso!");
            } else {
                res.status(404).send("Vaga de emprego não encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);
router.delete(
    "/job/:id",
    function (req, res) {
        const {id} = req.params;
        try {
            const { id } = req.params;
            let apagaJob = jobs.delete(id);
            if (apagaJob) {
                res.status(200).json("Vaga de emprego deletada com sucesso!");
            } else {
                res.status(404).send("Vaga de emprego não encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);

module.exports = router;
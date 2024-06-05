const routerJobs = require("./jobRouter.js");
const routerPessoas = require("./pessoaRouter.js");

module.exports = function (app, express) {
    app.use(express.json())
    app.use(routerJobs);
    app.use(routerPessoas);
}

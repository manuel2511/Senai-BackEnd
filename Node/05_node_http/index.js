const http = require('http');
const httpServer = http.createServer(function (requisicao, resposta) {
    resposta.end("Seja bem vindo ao servidor....")
});
const port = 3000;
httpServer.listen(
    port,
    function (error) {
        if (error) {
            console.log("Ocorreu um erro ao rodar o servidor!");
            return;
        } else {
            console.log("Servidor rodando com sucesso!");
        }
    }
);
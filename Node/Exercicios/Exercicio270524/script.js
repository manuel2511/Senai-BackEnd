
    let fs = require('fs');
    const data = 'Este texto que está sendo escrito no node!';

    fs.writeFile('arquivo.txt', data, 'utf8', (erro) =>{
        if (erro) {
            console.log('Erro na escrita do arquivo: ' + erro);
            return;
        }
        console.log('Aquivo escrito com sucesso!');
    });

    fs.readFile('arquivo.txt', 'utf8', (erro, texto) => {
        if (erro) {
            console.log('Erro na leitura do arquivo: ' + erro);
            return;
        } else {
            console.log(texto);
        }
    })
    console.log('Entrou aqui');

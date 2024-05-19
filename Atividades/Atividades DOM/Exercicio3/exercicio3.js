
function validar() {
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const disciplina = document.getElementById('disciplina').value;
    const nota = document.getElementById('nota').value;
    let situacao = ""
    if ( nota >= 60 ) {
        situacao = "Aprovado";
    }else if ( nota < 50){
        situacao = "Reprovado";
    }else{
        situacao = "para a Recuperação";
    }
    alert(`O aluno ${nome} com a matricula ${matricula} da disciplina ${disciplina}, foi ${situacao} com a nota ${ nota}`);
} 
function validarCPF(cpf) {
    if (cpf.length === 11) {
        return true; 
    } 
  }
  function validarTelefone(telefone) {
    if (/^(\(\d{3})\)\s(\d)\s(\d{4})-(\d{4})$/.test(telefone)) {
        return true; 
    } 
  }
  function validarSexo(sexo) {
    if ( /^[MFO]$/i.test(sexo)) {
        return true; 
    } 
  }
  function formatarTelefone(telefone) {
    if (`(${telefone.substring(0, 3)}) ${telefone.charAt(3)} ${telefone.substring(4, 9)}-${telefone.substring(9)}`) {
      return true;
    } 
  }
  
              
  function formulario() {
     let nome = document.getElementById("nome").value ;
     let sobrenome = document.getElementById("sobrenome").value ;
     let cpf;
     do {
       cpf = document.getElementById("cpf").value ;
     } while (!validarCPF(cpf));
     let sexo;
     do {
       sexo = document.getElementById("sexo").value ;
     } while (!validarSexo(sexo));
     
     let dataNascimento = document.getElementById("dataNascimento").value ;
     let endereco = document.getElementById("endereco").value ;
     let telefone;
     do {
       telefone = document.getElementById("telefone").value ;
     } while (!validarTelefone(telefone));
     console.log("Nome" + nome);
     console.log("Sobrenome" + sobrenome);
     
  }
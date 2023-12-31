function validarForm() {
    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var data = document.getElementById("data");
    var origem = document.getElementById("origem");

    var nomeErro = document.getElementById("nome-erro");
    var telefoneErro = document.getElementById("telefone-erro");
    var dataErro = document.getElementById("data-erro");
    var origemErro = document.getElementById("origem-erro");

    if (nome.value === "") {
        nomeErro.textContent = "Por favor, preencha o campo Nome.";
    } else {
        nomeErro.textContent = "";
    }

    if (telefone.value === "") {
        telefoneErro.textContent = "Por favor, preencha o campo Telefone.";
    } else if (!/^[0-9]+$/.test(telefone.value)) {
        telefoneErro.textContent = "Por favor, insira apenas números no campo Telefone.";
    } else {
        telefoneErro.textContent = "";
    }

    if (data.value === "") {
        dataErro.textContent = "Por favor, selecione uma data.";
    } else {
        dataErro.textContent = "";
    }

    if (origem.value === "") {
        origemErro.textContent = "Por favor, selecione uma origem.";
    } else {
        origemErro.textContent = "";
    }

    if(email.value ===""){
        emailErro.textContent ="Por favor digite o e-mail corretamente.";
        
    }else{
        emailErro.textContent = "";
    }
    if(idade.value ===""){
        idadeErro.textContent ="Irforme sua idade.";
        
    }else{
        cep.textContent = "";
    }
    if(cep.value ===""){
        cepErro.textContent ="Irforme seu cep corretamente.";
    }else{
        cepErro.textContent = "";
    }

    return (nomeErro.textContent === "" && telefoneErro.textContent === "" && emailErro.textContent === "" && idadeErro.textContent === ""&& cepErro.textContent);
}

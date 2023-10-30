function validarCpf(){
    var cpf = document.getElementById("cpf").value;
    var expressaoRegular = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if(expressaoRegular.test(cpf)){
        document.getElementById("saidaCpf").textContent = "CPF valido:" + cpf;
    }else{
        document.getElementById("saidaCpf").textContent = "CPF invalido ";
    }

}


// function validarTurma(){
//     var nomeTurma = document.getElementById("nomeTurma").value;
//     var expressaoRegular = /^[ 0-9a-zA-Z\b]+$/;

//     if(expressaoRegular.test(nomeTurma)){
//         document.getElementById("saidaTurma").textContent = "Turma valida: " + nomeTurma;
//     }else{
//         document.getElementById("saidaTurma").textContent = "Turma invalida, retire os carateres especiais:" + nomeTurma;
//     }
// }

// function validarDisciplina(){
//     var nomeDisciplina = document.getElementById("nomeDisciplina").value;
//     var expressaoRegular = /^[a-zA-Z]+$/;

//     if(expressaoRegular.test(nomeDisciplina)){
//         document.getElementById("saidaDisciplina").textContent = "Turma valida: " + nomeDisciplina;
//     }else{
//         document.getElementById("saidaDisciplina").textContent = "Disciplina invalida, deve conter apenas letras:  " + nomeTurma;
//     }
// }

function validarNome(){
    var nome = document.getElementById("nome").value;
    var expressaoRegular = /^[a-zA-Z]+$/;

    if(expressaoRegular.test(nome)){
        document.getElementById("saidaNome").textContent = "Nome valido: " + nome;
    }else{
        document.getElementById("saidaNome").textContent = "Nome invalido, deve conter apenas letras:  " + nome;
    }
}

function validarTelefone() {
    var numeroTelefone = document.getElementById("numeroTelefone").value;
    var expressaoRegular = /^\d{2} \d{5}-\d{4}$/;

    if (expressaoRegular.test(numeroTelefone)) {
        document.getElementById("saidaTelefone").textContent = "Número de telefone válido: " + numeroTelefone;
    } else {
        document.getElementById("saidaTelefone").textContent = "Número de telefone inválido. Use o formato: 99 99999-9999.";
    }
}
import { Aluno } from "./aluno.js";


function exibeAluno() {
    let nome = document.getElementById("nomeAluno").value;
    let idade = document; getElementById("idadeAluno").value;
    let chamada = document.getElementById("numeroChamada").value;

    let aluno = new Aluno(nome, idade, chamada);

    console.log(aluno.nome);
    console.log(aluno.idade);
    console.log(aluno.numeroChamada);
}
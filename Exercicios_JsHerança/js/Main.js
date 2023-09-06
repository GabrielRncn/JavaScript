import Aluno from "./Aluno.js";

function iniciar(){
    let aluno = new Aluno("Gabriel", "Ronconi", 20, 123456, "Front-End");
    aluno.mostrarDados();
}

document.addEventListener("DOMContentLoaded" , iniciar);
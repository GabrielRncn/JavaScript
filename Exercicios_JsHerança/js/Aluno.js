import Pessoa from "./Pessoa.js";
export default class  Aluno extends Pessoa{
    #numeroMatricula;
    #curso;

    constructor(primeiroNome, sobreNome, idade, numeroMatricula, curso){
        super(primeiroNome, sobreNome, idade);
        this.#numeroMatricula = numeroMatricula;
        this.#curso = curso;
    }
    get getNumeroMatricula(){return this.#numeroMatricula;}
    get getCurso(){return this.#curso;}

    mostrarDados(){
        console.log(super.mostrarDados());
        console.log(this.getNumeroMatricula);
        console.log(this.getCurso);


    }
}
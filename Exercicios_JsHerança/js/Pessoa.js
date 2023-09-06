export default class Pessoa{
    #nome;
    #idade;

    constructor(primeiroNome, sobreNome, idade){
        this.#nome = {
            primeironome : primeiroNome,
            sobrenome : sobreNome,
        };
        this.#idade = idade;
    }
    get getNome(){return this.#nome;}
    get getIdade(){return this.#idade;}

    mostrarDados(){
        console.log(this.getNome);
        console.log(this.getIdade);
    }

}
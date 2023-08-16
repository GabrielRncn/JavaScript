export class Aluno{
    #nome;
    #idade;
    #numeroChamada;

    constructor(nome, idade, numeroChamada){
        this.#nome = nome;
        this.#idade = idade;
        this.#numeroChamada = numeroChamada;
    }

    get nome(){
        return this.#nome;
    }

    get idade(){
        return this.#idade;
    }

    get numeroChamada() {
        return this.#numeroChamada;
    }

    toString(){
        return `Aluno{nome:${this.#nome},idade:${this.#idade},numeroChamada:${this.#numeroChamada}}`
    }
}
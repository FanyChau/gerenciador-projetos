import { Projeto } from "./projeto.js";
export class Usuario{
    constructor(nome, email){
        this.nome = nome;
        this.id = Date.now()+ Math.random();
        this.email = email;
        this.projetos = [];
    }

    adicionarProjeto(projeto){
        this.projetos.push(projeto)
    }

    removerProjeto(id){
        this.projetos = this.projetos.filter(projeto => projeto.id != id);
    }
}
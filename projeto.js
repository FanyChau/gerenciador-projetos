import { Tarefa } from "./tarefa.js";
export class Projeto{
    constructor(nome, status="pendente") {
        this.nome = nome;
        this.status = status;
        this.id = Date.now()+ Math.random();
        this.itens = [];
    }

    adicionarTarefa(item){
        this.itens.push(item);
    }

    atualizar(novoStatus){
        this.status = novoStatus;
    }

    removerTarefa(id){
        this.itens = this.itens.filter(item => item.id !== id)
    }
}
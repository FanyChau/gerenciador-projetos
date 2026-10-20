export class Tarefa {
    constructor(titulo, prioridade="Media") {
        this.titulo= titulo;
        this.prioridade = prioridade;
        this.id = Date.now() + Math.random();
        this.concluida= false;
    }

     concluir(){
            this.concluida = true;
        }
    
    alternarStatus(){
        this.concluida = !this.concluida;
    }
}
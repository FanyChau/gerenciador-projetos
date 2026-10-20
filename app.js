import { Tarefa } from "./tarefa.js";
import { Projeto } from "./projeto.js";
import { Usuario } from "./usuario.js";
import { gerenciadorArmazenamento } from "./gerenciadorArmazenamento.js";

async function executarApp() {
    const armazenamento = new gerenciadorArmazenamento;
    const User1 = new Usuario("Epifanio", "Epifaniojaimechau@gmail.com")
    const projeto1 = new Projeto("ProjetoWeb","iniciado");
    const tarefa1 = new Tarefa("Tomar Banho", "Alta");
    const tarefa2= new Tarefa("Jantar", "Media")

    projeto1.adicionarTarefa(tarefa1);
    projeto1.adicionarTarefa(tarefa2);
    User1.adicionarProjeto(projeto1);

    console.log("Salvando os dados...");
    await armazenamento.salvar(User1);

    console.log("\nLendo dados do disco...");
    const dadosCarregados = await armazenamento.carregar();

    console.log("\nResultado lido do arquivo JSON:");
    console.log(JSON.stringify(dadosCarregados, null, 2));

    //console.log(JSON.stringify(User1, null, 2));

}

executarApp();






//t3.removerTarefa(t1.id);
//t2.concluir();

//User1.removerProjeto(t3.id);
//console.log(JSON.stringify(User1, null, 2));
//t2.alternarStatus();
//console.log(t2);
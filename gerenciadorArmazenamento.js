import fs from 'node:fs/promises';

export class gerenciadorArmazenamento{
    constructor(caminhoArquivo = './dados.json'){
        this.caminhoArquivo = caminhoArquivo;
    }

    async salvar(dados){
        try{
            const dadosJason = JSON.stringify(dados, null, 2);

            await fs.writeFile(this.caminhoArquivo, dadosJason, 'utf-8');
            console.log("Dados salvos com sucesso no disco!")
        } catch (erro) {
            console.log("Erro ao salvar os dados:", erro.message)
        }
    }

    async carregar() {
        try {
            const conteudo = await fs.readFile(this.caminhoArquivo, 'utf-8');

            return JSON.parse(conteudo);
        } catch (erro){
            if(erro.code === 'ENOENT'){
                console.log("Arquivo de dados nao encontrado. Criando um novo...");
                return null;
            }
            console.error("Erro ao carregar os dados:", erro.menssage);
            return null;
        }
    }
}
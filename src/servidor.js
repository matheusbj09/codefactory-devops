// servidor simples feito para o trabalho de DevOps
// aluno: Matheus Barreto de Jesus RU 5217171
const express = require('express');
const { rotaSaude, listarClientes, paginaInicial } = require('./rotas');

const porta = process.env.PORTA || 3000;
const paginaInicialApp = express();

paginaInicialApp.use(express.json());

// rota principal
paginaInicialApp.get('/', paginaInicial);

// rota de saude que o docker e o CI usam pra saber se ta no ar
paginaInicialApp.get('/saude', rotaSaude);
paginaInicialApp.get('/health', rotaSaude); // alias pra facilitar

// lista de clientes (vem do banco se tiver, senao lista fixa)
paginaInicialApp.get('/clientes', listarClientes);

if (require.main === module) {
  paginaInicialApp.listen(porta, () => {
    console.log('servidor rodando na porta ' + porta);
  });
}

module.exports = paginaInicialApp;

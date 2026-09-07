// servidor
const express = require('express');
const { rotaSaude, listarClientes, paginaInicial } = require('./rotas');

const porta = process.env.PORTA || 3000;
const paginaInicialApp = express();

paginaInicialApp.use(express.json());

// libera acesso pra pagina-teste.html abrir direto do navegador
paginaInicialApp.use((req, res, proximo) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  proximo();
});

// rota principal
paginaInicialApp.get('/', paginaInicial);

// rota de saude que o docker e o CI usam pra saber se ta no ar
paginaInicialApp.get('/saude', rotaSaude);
paginaInicialApp.get('/health', rotaSaude); 

// lista de clientes (vem do banco se tiver, senao lista fixa)
paginaInicialApp.get('/clientes', listarClientes);

if (require.main === module) {
  paginaInicialApp.listen(porta, () => {
    console.log('servidor rodando na porta ' + porta);
  });
}

module.exports = paginaInicialApp;

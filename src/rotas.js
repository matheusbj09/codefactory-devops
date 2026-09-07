// rotas da api 
function paginaInicial(req, res) {
  res.json({
    mensagem: 'API CodeFactory no ar',
    aluno: 'Matheus Barreto de Jesus - RU 5217171',
    rotas: ['/saude', '/clientes']
  });
}

function rotaSaude(req, res) {
  res.json({ estado: 'ok', horario: new Date().toISOString() });
}


async function listarClientes(req, res) {
  const listaFixa = [
    { codigo: 1, nomeCliente: 'Padaria Pao Quente', cidade: 'Aracaju' },
    { codigo: 2, nomeCliente: 'Oficina do Ze', cidade: 'Barra dos Coqueiros' }
  ];

  // se tiver DATABASE_URL tenta usar, senao cai na lista fixa
  if (!process.env.DATABASE_URL) {
    return res.json(listaFixa);
  }

  try {
    const { Client } = require('pg');
    const conexao = new Client({ connectionString: process.env.DATABASE_URL });
    await conexao.connect();
    const resultado = await conexao.query('SELECT id as codigo, nome as "nomeCliente", cidade FROM clientes ORDER BY id');
    await conexao.end();
    if (resultado.rows.length === 0) {
      return res.json(listaFixa);
    }
    return res.json(resultado.rows);
  } catch (erro) {
    console.log('nao consegui ligar no banco, usando lista fixa: ' + erro.message);
    return res.json(listaFixa);
  }
}

module.exports = { paginaInicial, rotaSaude, listarClientes };


// testes bem simples so pra pipeline ter o que rodar
const { describe, it } = require('node:test');
const assert = require('node:assert');

const { rotaSaude, paginaInicial } = require('./rotas');

function respostaFalsa() {
  return {
    dados: null,
    json(d) { this.dados = d; return this; }
  };
}

describe('rotas basicas', () => {
  it('rota de saude retorna ok', () => {
    const req = {};
    const res = respostaFalsa();
    rotaSaude(req, res);
    assert.strictEqual(res.dados.estado, 'ok');
  });

  it('pagina inicial tem mensagem', () => {
    const req = {};
    const res = respostaFalsa();
    paginaInicial(req, res);
    assert.ok(res.dados.mensagem.includes('CodeFactory'));
  });
});

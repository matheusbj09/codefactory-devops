-- cria tabela de clientes pra demonstrar o banco no docker
CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cidade VARCHAR(100),
  criado_em TIMESTAMP DEFAULT NOW()
);

INSERT INTO clientes (nome, cidade) VALUES
  ('Padaria Pao Quente', 'Curitiba'),
  ('Oficina do Ze', 'Sao Jose dos Pinhais')
ON CONFLICT DO NOTHING;

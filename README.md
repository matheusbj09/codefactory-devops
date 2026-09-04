# CodeFactory Solutions — Adoção DevOps

Trabalho prático de DevOps e Integração Contínua.
Aluno: **Matheus Barreto de Jesus — RU 5217171**

## Descrição

A CodeFactory cresceu de 2 pra 8 pessoas e começou a atrasar entrega, dar erro depois de atualizar e cada dev com um ambiente diferente. Esse projeto mostra na prática como organizar isso com Git, Docker e Integração Contínua usando uma API bem simples de exemplo.

## Objetivo

Deixar o fluxo mais organizado, colaborativo e automatizado:
- versionar tudo no Git/GitHub com branches e Pull Requests
- padronizar o ambiente com Docker (api + banco)
- rodar teste e build automático a cada push (GitHub Actions)

## Tecnologias utilizadas

- Node.js 20 + Express
- PostgreSQL 16 (via Docker)
- Docker e Docker Compose
- GitHub Actions (pipeline de CI)

## Estrutura de pastas

```
codefactory-devops/
├── src/
│   ├── servidor.js      # sobe a api na porta 3000
│   ├── rotas.js         # rotas / , /saude e /clientes
│   └── rotas.test.js    # testes simples pro CI rodar
├── pagina-teste.html    # pagina simples pra testar a api
├── Dockerfile
├── docker-compose.yml
├── banco-criar-tabelas.sql
└── .github/workflows/integracao.yml
```

## Como instalar

Precisa ter Node 20, Git e Docker instalados.

```powershell
git clone https://github.com/SEU-USUARIO/codefactory-devops.git
cd codefactory-devops
npm install
```

## Como executar

Sem docker (só a api, usa lista fixa):
```powershell
npm run inicio
# abre http://localhost:3000/saude
```

Com docker (api + banco com tabela clientes):
```powershell
docker compose up --build
# api em http://localhost:3000/saude
# banco em localhost:5432 (usuario postgres senha postgres)
```

Pra parar:
```powershell
docker compose down
```

## Rotas

- `GET /` — mensagem inicial
- `GET /saude` — retorna `{ "estado": "ok" }`
- `GET /clientes` — lista do banco se tiver, senão lista fixa

## Pipeline (CI)

Arquivo `.github/workflows/integracao.yml`. A cada push/PR pra `main` ou `desenvolvimento` ele:
1. baixa o código
2. instala o Node 20
3. instala pacotes
4. roda `npm run verificar` e `npm test`
5. faz `docker build`

## Licença

MIT — pode usar à vontade. Veja o arquivo LICENSE.

## Versão

v1.0 — entrega do trabalho.

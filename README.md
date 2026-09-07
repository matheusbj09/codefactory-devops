# CodeFactory Solutions — Adoção DevOps

Trabalho prático de DevOps e Integração Contínua.
Meu nome é **Matheus Barreto de Jesus — RU 5217171**.

## Descrição

Eu escolhi o caso da CodeFactory porque ele parece muito com o que eu vejo no dia a dia: a empresa cresceu de 2 pra 8 pessoas e começou a atrasar entrega, dar erro depois de atualizar e cada dev com um ambiente diferente. Nesse projeto eu mostro na prática como eu organizei isso com Git, Docker e Integração Contínua usando uma API bem simples que eu mesmo fiz de exemplo.

## Objetivo

O meu objetivo foi deixar o fluxo mais organizado, colaborativo e automatizado:
- eu versionei tudo no Git/GitHub com branches e Pull Requests
- eu padronizei o ambiente com Docker (api + banco)
- eu configurei teste e build automático a cada push com GitHub Actions

## Tecnologias utilizadas

As tecnologias que eu usei foram:
- Node.js 20 + Express (pra API)
- PostgreSQL 16 (via Docker, pro banco)
- Docker e Docker Compose (pra padronizar o ambiente)
- GitHub Actions (pra pipeline de CI)

## Estrutura de pastas

Eu organizei o projeto assim:

```
codefactory-devops/
├── src/
│   ├── servidor.js      # sobe a api na porta 3000
│   ├── rotas.js         # rotas / , /saude e /clientes
│   └── rotas.test.js    # testes simples pro CI rodar
├── pagina-teste.html    # pagina simples que eu fiz pra testar a api no navegador
├── Dockerfile
├── docker-compose.yml
├── banco-criar-tabelas.sql
└── .github/workflows/integracao.yml
```

## Como instalar

Pra rodar aí você precisa ter Node 20, Git e Docker instalados. Eu usei Windows com PowerShell.

```powershell
git clone https://github.com/matheusbj09/codefactory-devops.git
cd codefactory-devops
npm install
```

## Como executar

Sem docker (só a api, usa lista fixa):
```powershell
npm run inicio
# abre http://localhost:3000/saude
```

Com docker (é o jeito que eu recomendo, sobe api + banco juntos - precisa do Docker Desktop):

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

As rotas que eu criei:
- `GET /` — mensagem inicial
- `GET /saude` — retorna `{ "estado": "ok" }`
- `GET /clientes` — lista do banco se tiver, senão lista fixa

## Pipeline (CI)

Eu criei o arquivo `.github/workflows/integracao.yml`. A cada push/PR pra `main` ou `desenvolvimento` ele:
1. baixa o código
2. instala o Node 20
3. instala pacotes
4. roda `npm run verificar` e `npm test`
5. faz `docker build`

## Licença

Eu deixei como MIT — pode usar à vontade. Veja o arquivo LICENSE.

## Versão

v1.0 — entrega do meu trabalho.

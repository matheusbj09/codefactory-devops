# imagem leve pra rodar em qualquer pc da equipe
FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY src ./src

EXPOSE 3000

# variaveis padrao, o compose passa as reais
ENV PORTA=3000

CMD ["node", "src/servidor.js"]

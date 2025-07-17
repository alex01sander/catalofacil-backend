# Imagem base
FROM node:20

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install --production

# Copia o restante do código
COPY . .

# Build do TypeScript
RUN npm run build

# Expõe a porta (ajuste se necessário)
EXPOSE 3000

# Comando para rodar a aplicação em produção
CMD ["npm", "run", "start:prod"]
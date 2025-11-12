FROM node:22
WORKDIR /app
COPY package*.json ./
EXPOSE 3000
#este primeiro run é para instalar as dependências do serve na raiz do projeto e rodar o docker
RUN npm install -g serve
RUN npm install
COPY . . 
CMD ["npm", "start"]
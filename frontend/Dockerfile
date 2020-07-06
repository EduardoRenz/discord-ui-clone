#Ultima versao do node com o sistema mais enxuto possivel
FROM node:alpine 
#Area de trabalho dentro da maquiina virtual
WORKDIR /usr/app 
#Copia os preparativos para a maquina
ADD  package*.json ./
RUN npm install
# Copia os arquivos do server 
COPY . .
# Expoem a porta 3000 que é onde esta o server
EXPOSE 3000

CMD ["npm","start"]

# roda docker build -t discord/frontend .
# roda docker run -p 3000:3000 -d discord/frontend
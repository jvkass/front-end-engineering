
### Obtendo a imagem do mongo

docker pull mongo

### Rodando o container mongodb

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=password mongo

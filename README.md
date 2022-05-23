# Projeto
Projeto desenvolvido para um desafio técnico, onde o objetivo era criar um sistema de enquete em realtime.

## Requisitos
- Criar um back (crud completo de criação/edição/exclusão) com gerenciamento de enquete e opções.
- A enquete deve ter um título e uma data programada para início e para término.
- O cadastro de opções de respostas da enquete devem ser dinâmicas, é obrigatório mínimo 3 opções.
- Listar todas as enquetes cadastradas no banco com o título e data de início e término.
- Apresentar todas as enquetes, não iniciadas/em andamento/finalizadas.
- Criar tela de apresentar a enquete com opções de resposta, com a data de início e término.
- Ao lado de cada opção, apresentar os números de votação total do lado de cada opção.
- Se a enquete não estiver ativa entre data/hora início e data/hora fim, as opções e o botão de votar deve estar desabilitado.
- Os números de resultados devem ser apresentados sempre que houver novo voto (realtime).

## Principais features
- Criação de enquete
- Atualização em realtime
- Filtro por status

## Tecnologias

- [Node JS](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Socket.IO](https://socket.io/)
- [Day.js](https://day.js.org/)
- [MySQL](https://www.mysql.com/)

## Comandos

- `dev`: Roda o servidor de desenvolvimento em `localhost:3333`

## Executando o projeto

### Configurando o prisma
1. Renomeie o arquivo `.env.example` para `.env`
2. Adicione as crêdencias para o MySQL.
3. Rode as migrations com o comando `npx prisma migrate dev`

### Rodando o servidor de desenvolvimento
1. Execute o comando `yarn dev`
3. Acesse [http://localhost:3333](http://localhost:3333)

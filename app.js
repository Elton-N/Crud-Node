const express = require('express'); // passa uma informação do express para constantes express
const userService = require('./services/users');
const req = require('express/lib/request');  // Use o objeto `req` para obter informações sobre a solicitação
const app = express() // a constante app recebe o framework express com seus parametros
const port = 3000     // porta para ser escutada no localhost com o número 3000 
app.use(express.json()); // usa os recursos do express


//get users - lista todos os usuários do endereço users
app.get('/users', (request, response) => {
  // exibe no formato JSON
  response.json(userService.getUsers());
})

// lista um único usuário com o id mencionado
app.get('/users/:id', (request, response) => { // 
  // pegar o id da requisição
  const idUser = request.params.id;
   // responder a requisição com as info do users
  response.json(userService.getUserById(idUser));
});

app.post('/users', (request, response) => {
   const body = request.body;
   response.status(201).json(userService.creatUser(body));
})

app.delete("/users/:id", (request, response) => { // deleta uma informação do banco de dados, referente ao ID mencionado
  // pegar o id da requisição
  const idUser = request.params.id;
  response.json("Apagado com sucesso");
});

app.patch("/users/:id", (request, response) => { 
  const idUser = request.params.id;
  const body = request.body;
  response.json(userService.updateUser(idUser, body));
});

// Fica escutando a porta 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
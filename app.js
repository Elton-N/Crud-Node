const express = require('express'); // passa uma informação do express para constantes express
const req = require('express/lib/request');  // Use o objeto `req` para obter informações sobre a solicitação
const app = express() // a constante app recebe o framework express com seus parametros
const port = 3000     // porta para ser escutada no localhost com o número 3000 
app.use(express.json()); // usa os recursos do express

// criação de um banco local em JSON
let bd = [ //usando array de objetos
    {
        id:"1", //ID único do usuário
        name: "Elton" // nome do usuário
    },
    {
        id:"2",
        name: "Bruna"
    }
]


//get users - lista todos os usuários do endereço users
app.get('/users', (request, response) => {
  // exibe no formato JSON
  response.json(bd);
})

// lista um único usuário com o id mencionado
app.get('/users/:id', (request, response) => { // 

  // pegar o id da requisição
  const idUser = request.params.id;

  // encontrar o usuario correspondente no bd
  const user = bd.filter((usuario) => usuario.id === idUser);

  // responder a requisição com as info do users
  response.json(user);
});

// Insere através do POST usuário no banco local
app.post('/users', (request, response) => {

  // pegar o id da requisição
   const body = request.body;

  // criar um novo objeto a partir desse corpo
  const newUser = {
    id: (bd.length+1).toString(),
    name: body.name
  }

  //adicionar esse novo objeto no banco
  bd.push(newUser);

  //responder a requisição com o banco completo
  response.json(bd);
})

app.delete("/users/:id", (request, response) => { // deleta uma informação do banco de dados, referente ao ID mencionado

  // pegar o id da requisição
  const idUser = request.params.id;

  // percorrer o banco e encontrar quem tem o id da requisição
  bd = bd.filter((usuario) => usuario.id != idUser);

  // deleta o condenado

  // responder com o meu banco atualizado
  response.json(bd);

})
//alterar o usuário mencionado pelo ID
app.patch("/users/:id",  (request, response) => { 
  
  // pegar o id da requisição
  const idUser = request.params.id;

  // pegar o corpo da requisição
  const body = request.body;

  // percorrer o banco
  bd = bd.map((usuario) => {
    if(usuario.id === idUser) {
   
      // atualizar as informações
   usuario.name = body.name;
    }
    return usuario

  })
  
// responder a requisição com o banco
response.json(bd);

})

// Fica escutando a porta 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
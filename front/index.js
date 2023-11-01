
fetch('https://crud-cxus.onrender.com/users/')
    // Tratamento do sucesso
    .then(response => response.json())  // converter para json
    .then(json => console.log(json))    //imprimir dados no console
    .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch

let conteudo = document.getElementById("api").innerHTML;
document.getElementById("conteudo").innerHTML = json
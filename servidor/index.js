//index.js

const express = require('express'); //importando a biblioteca 
const app = express(); // inicializando o servidor 
const port = 3000;

/*
GET: pegar a informação
POST:
PUT:
DELETE:
*/

//DADOS
let produtos = [
    
    {id: 1, nome: 'Mouse', preco: 50.00},
    {id: 2, nome: 'Mouse', preco: 20.00},
    {id: 3, nome: 'Teclado', preco: 49.90},
    {id: 4, nome: 'Headphone', preco: 79.00},
]

// ROTAS
app.get('/', (req, resp) => {    
    resp.send('Rota inicial');

})
app.get('/produtos', (req, resp) => {
    resp.send(produtos);
})

// Retornar um produto em especifico
app.get('/produto/:id', (req, resp) => {
    let id = req.params.id;

    for (let produto of produtos) {
        if ( produto.id == id){
            return resp.send (produto);
            
        }
    
    }

    resp.send({msg: 'Produto não encontrado'})

})

//Direcionando a porta ao servidor 
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});
// Instalar os pacotes  experss, cors, 
// criar o script do nodemon  no package.json 
// 3 Importar os pacotes e ionicializa-los 
// 4 Criar a Rota inicial 
// Iniciar a escuta do servidor em uma porta escolhida 

const express = require('express');  // Importando o express
const cors = require('cors');
const bd = require('./bd'); // Importando a conexão como BD

const app = express();  // Inicializando o servidor
const port = 3000;  // Porta dedicada ao servidor


//middleware
app.use(express.json());
app.use(cors()); //Liberando acesso de qualqer origem 






app.get('/pokemon', async (req, res) => {
    let listaPoke = await bd.query("SLECT id, nome FROM pokemon");

    return res.status(200).json(listaPoke);
});


app.get('/pokemon/busca/:nome', async (req, res) => {
    let nome = req.params.nome;
}); 
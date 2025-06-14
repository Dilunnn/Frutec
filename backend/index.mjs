import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 3000;

app.use(express.json());


const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: '' /*adicionar nome do banco depois*/
});

conexao.connect((er) => {
    if (er) {
        console.error('Erro ao conectar ao MySQL:', er);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

app.get('/', (req, res) => {
    res.send('Olá! Bem-vindo ao nosso back-end');
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
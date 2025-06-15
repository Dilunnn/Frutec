import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 3000;

app.use(express.json());


const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', /*Antes de iniciar o banco verifique a senha talvez senha seja diferente*/
    database: 'frutec'
});

conexao.connect((er) => {
    if (er) {
        console.error('Erro ao conectar ao MySQL:', er);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

app.get('/', (req, res) => {
    res.send('Olá! Bem-vindo');
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
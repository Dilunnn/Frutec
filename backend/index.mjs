import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json());



const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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

app.post('/CadastrarUsuario', (req, res) => {
    const { nome, sobrenome, telefone, email, senha } = req.body;

    if (!nome || !sobrenome || !telefone || !email || !senha) {
        return res.json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    const sql = `INSERT INTO usuarios (Nome, Sobrenome, Telefone, Email, Senha)
                 VALUES ('${nome}', '${sobrenome}', '${telefone}', '${email}', '${senha}')`;

    conexao.query(sql, (err, resultado) => {
        if (err) {
            res.json({ mensagem: `Erro ao cadastrar usuário: ${err}` });
        } else {
            res.json({ mensagem: 'Usuário cadastrado com sucesso!', id: resultado.insertId });
        }
    });
});

app.get('/PerfilUsuario/:id', (req,res) => {
    let id = req.params.id
    let sql = `SELECT * FROM usuarios WHERE id_Usuario = ${id}`
    conexao.query(sql, (err, resultado) => {
        if (err) {
            res.send(`Erro: ${err}`);
        } else if (resultado.length === 0) {
            res.json({ mensagem: "Usuário não encontrado." });
        } else {
            res.json(resultado[0]);
        }
    })
})
app.put('/PerfilUsuario/:id', (req, res) => {
  const { id } = req.params;
  const { senha } = req.body;

  if (!senha) {
    return res.json({ erro: 'Nova senha não fornecida.' });
  }

  const sql = `UPDATE usuarios SET Senha = '${senha}' WHERE id_Usuario = ${id}`;

  conexao.query(sql, (err, resultado) => {
    if (err) {
      return res.json({ erro: 'Erro ao atualizar senha', detalhes: err });
    }
    res.json({ mensagem: 'Senha atualizada com sucesso!' });
  });
});



app.get('/ingredientes', (req,res) => {
    let sql = `SELECT estoque.id_Estoque, ingredientes.Nome_Ingrediente AS nome_ingrediente, estoque.quantidade,
    estoque.data_atualizacao
    FROM estoque
    JOIN ingredientes ON estoque.id_Ingrediente = ingredientes.id_Ingrediente;`
    conexao.query(sql, (err, resultado) => {
        if (err) {
            res.send(`Erro: ${err}`)
        } else {
            res.json(resultado)            
        }
    })
})

app.get('/Vercarrinho/:id', (req, res) => {
    let id = req.params.id;
    let sql = `
        SELECT 
            pedidos.id_Pedido,
            personalizacao_pedido.tamanho_copo,
            personalizacao_pedido.camada_1,
            personalizacao_pedido.camada_2,
            personalizacao_pedido.camada_3,
            personalizacao_pedido.Fruta_1,
            personalizacao_pedido.Fruta_2,
            personalizacao_pedido.complemento_1,
            personalizacao_pedido.complemento_2,
            personalizacao_pedido.complemento_3,
            personalizacao_pedido.complemento_4,
            personalizacao_pedido.complemento_5,
            pedidos.metodo_pagamento
        FROM pedidos
        JOIN personalizacao_pedido ON pedidos.id_Pedido = personalizacao_pedido.id_Pedido
        WHERE pedidos.id_Usuario = ${id}
    `;
    conexao.query(sql, (err, resultado) => {
        if (err) {
            res.send(`Erro: ${err}`);            
        } else if (resultado.length === 0) {
            res.json({mensagem: "Usuário ainda não fez nenhum pedido"});
        } else {
            res.json(resultado);
        }
    });
})

app.get('/VerEstoque', (req,res) => {
    let sql = `
        SELECT estoque.id_Estoque, ingredientes.Nome_Ingrediente AS 'Nome do ingrediente', estoque.quantidade, estoque.data_atualizacao FROM estoque
        JOIN ingredientes ON estoque.id_Ingrediente = ingredientes.id_Ingrediente;
    `
    conexao.query(sql, (err, resultado) => {
        if (err) {
            res.send(`Erro: ${err}`)
            
        } else {
            res.json(resultado);
            console.log(resultado);
            
        }
    });
})


app.get('/TodosOsPedidos', (req,res) => {
    let sql = `
    SELECT 
    pedidos.id_Pedido,
    usuarios.Nome,
    usuarios.Sobrenome,
    usuarios.Telefone,
    personalizacao_pedido.tamanho_copo,
    personalizacao_pedido.camada_1,
    personalizacao_pedido.camada_2,
    personalizacao_pedido.camada_3,
    personalizacao_pedido.fruta_1,
    personalizacao_pedido.fruta_2,
    personalizacao_pedido.complemento_1,
    personalizacao_pedido.complemento_2,
    personalizacao_pedido.complemento_3,
    personalizacao_pedido.complemento_4,
    personalizacao_pedido.complemento_5,
    pedidos.metodo_pagamento,
    pedidos.data_pedido
    FROM pedidos
    JOIN usuarios ON pedidos.id_Usuario = usuarios.id_Usuario
    JOIN personalizacao_pedido ON pedidos.id_Pedido = personalizacao_pedido.id_Pedido;
    `
    conexao.query(sql,(err,resultado) => {
        if (err) {
            res.send(`Erro: ${err}`)
        } else {
            res.json(resultado)
            console.log(resultado);
            
        }
    })
})


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
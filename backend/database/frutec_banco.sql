CREATE DATABASE Frutec;


use Frutec;

CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Exemplo de cliente
INSERT INTO cliente (nome, telefone, endereco)
VALUES ('Ana Paula', '85987654321', 'Rua das Palmeiras, 123');

SELECT * FROM cliente;



CREATE TABLE produto (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    tipo VARCHAR(50), -- Ex: 'açaí', 'adicional'
    estoque INT DEFAULT 0,
    validade DATE
);

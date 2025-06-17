USE Frutec;

-- Tabela de usuários
CREATE TABLE usuarios (
    id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Sobrenome VARCHAR(100),
    Telefone VARCHAR(20) NOT NULL UNIQUE,
    Email VARCHAR(50) NOT NULL UNIQUE,
    Endereco VARCHAR(255),
    Tipo ENUM('Cliente', 'ADM') NOT NULL,
    Senha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de ingredientes com preço
CREATE TABLE ingredientes (
    id_Ingrediente INT PRIMARY KEY AUTO_INCREMENT,
    Nome_Ingrediente VARCHAR(100) NOT NULL,
    Descricao TEXT,
    preco DECIMAL(10,2) NOT NULL DEFAULT 0.00
);

-- Tabela de estoque
CREATE TABLE estoque (
    id_Estoque INT PRIMARY KEY AUTO_INCREMENT,
    id_Ingrediente INT NOT NULL,
    quantidade INT NOT NULL,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_Ingrediente) REFERENCES ingredientes(id_Ingrediente)
);

-- Tabela de pedidos
CREATE TABLE pedidos (
    id_Pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_Usuario INT NOT NULL,
    metodo_pagamento ENUM('Pix', 'Dinheiro', 'Cartão') NOT NULL,
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_Usuario) REFERENCES usuarios(id_Usuario)
);

-- Tabela de personalização de pedidos (1:1 com pedidos)
CREATE TABLE personalizacao_pedido (
    id_Pedido INT PRIMARY KEY ,
    tamanho_copo ENUM('Pequeno', 'Médio', 'Grande') NOT NULL,
    camada_1 ENUM('Leite Ninho', 'Leite Condensado', 'Creme de Le', 'Granola', 'Paçoca', 'Chocolate Granulado', 'Nutella', 'Mel', 'Doce de Leite', 'Leite em Pó'),
    camada_2 ENUM('Leite Ninho', 'Leite Condensado', 'Creme de Le', 'Granola', 'Paçoca', 'Chocolate Granulado', 'Nutella', 'Mel', 'Doce de Leite', 'Leite em Pó'),
    camada_3 ENUM('Leite Ninho', 'Leite Condensado', 'Creme de Le', 'Granola', 'Paçoca', 'Chocolate Granulado', 'Nutella', 'Mel', 'Doce de Leite', 'Leite em Pó'),
    fruta_1 ENUM('Morango', 'Banana', 'Kiwi', 'Manga', 'Abacaxi', 'Uva', 'Blueberry', 'Maracujá', 'Melancia', 'Acerola'),
    fruta_2 ENUM('Morango', 'Banana', 'Kiwi', 'Manga', 'Abacaxi', 'Uva', 'Blueberry', 'Maracujá', 'Melancia', 'Acerola'),
    complemento_1 ENUM('Castanha de Caju', 'Amendoim Torrado', 'Coco Ralado', 'Gotas de Chocolate', 'Leite de Coco', 'Tapioca', 'Chantilly', 'Granulado Colorido', 'Cereal Matinal', 'Aveia'),
    complemento_2 ENUM('Castanha de Caju', 'Amendoim Torrado', 'Coco Ralado', 'Gotas de Chocolate', 'Leite de Coco', 'Tapioca', 'Chantilly', 'Granulado Colorido', 'Cereal Matinal', 'Aveia'),
    complemento_3 ENUM('Castanha de Caju', 'Amendoim Torrado', 'Coco Ralado', 'Gotas de Chocolate', 'Leite de Coco', 'Tapioca', 'Chantilly', 'Granulado Colorido', 'Cereal Matinal', 'Aveia'),
    complemento_4 ENUM('Castanha de Caju', 'Amendoim Torrado', 'Coco Ralado', 'Gotas de Chocolate', 'Leite de Coco', 'Tapioca', 'Chantilly', 'Granulado Colorido', 'Cereal Matinal', 'Aveia'),
    complemento_5 ENUM('Castanha de Caju', 'Amendoim Torrado', 'Coco Ralado', 'Gotas de Chocolate', 'Leite de Coco', 'Tapioca', 'Chantilly', 'Granulado Colorido', 'Cereal Matinal', 'Aveia'),
    FOREIGN KEY (id_Pedido) REFERENCES pedidos(id_Pedido)
);

-- Inserção de usuários
INSERT INTO usuarios (Nome, Sobrenome, Telefone, Email, Endereco, Tipo, Senha) VALUES
('Ana', 'Silva', '8599991001', 'ana1@gmail.com', 'Rua A, 101', 'Cliente', 'senha1'),
('Bruno', 'Costa', '8599991002', 'bruno2@gmail.com', 'Rua B, 102', 'Cliente', 'senha2'),
('Carla', 'Souza', '8599991003', 'carla3@gmail.com', 'Rua C, 103', 'ADM', 'senha3'),
('Daniel', 'Lima', '8599991004', 'daniel4@gmail.com', 'Rua D, 104', 'Cliente', 'senha4'),
('Eduarda', 'Melo', '8599991005', 'eduarda5@gmail.com', 'Rua E, 105', 'Cliente', 'senha5'),
('Felipe', 'Alves', '8599991006', 'felipe6@gmail.com', 'Rua F, 106', 'Cliente', 'senha6'),
('Giovana', 'Castro', '8599991007', 'giovana7@gmail.com', 'Rua G, 107', 'ADM', 'senha7'),
('Henrique', 'Martins', '8599991008', 'henrique8@gmail.com', 'Rua H, 108', 'Cliente', 'senha8'),
('Isabela', 'Ferreira', '8599991009', 'isabela9@gmail.com', 'Rua I, 109', 'Cliente', 'senha9'),
('João', 'Pereira', '8599991010', 'joao10@gmail.com', 'Rua J, 110', 'Cliente', 'senha10'),
('Karen', 'Rodrigues', '8599991011', 'karen11@gmail.com', 'Rua K, 111', 'Cliente', 'senha11'),
('Lucas', 'Monteiro', '8599991012', 'lucas12@gmail.com', 'Rua L, 112', 'Cliente', 'senha12'),
('Mariana', 'Teixeira', '8599991013', 'mariana13@gmail.com', 'Rua M, 113', 'ADM', 'senha13'),
('Nicolas', 'Freitas', '8599991014', 'nicolas14@gmail.com', 'Rua N, 114', 'Cliente', 'senha14'),
('Olívia', 'Barros', '8599991015', 'olivia15@gmail.com', 'Rua O, 115', 'Cliente', 'senha15'),
('Pedro', 'Ribeiro', '8599991016', 'pedro16@gmail.com', 'Rua P, 116', 'Cliente', 'senha16'),
('Quésia', 'Gomes', '8599991017', 'quesia17@gmail.com', 'Rua Q, 117', 'Cliente', 'senha17'),
('Rafael', 'Dantas', '8599991018', 'rafael18@gmail.com', 'Rua R, 118', 'Cliente', 'senha18'),
('Sara', 'Araújo', '8599991019', 'sara19@gmail.com', 'Rua S, 119', 'ADM', 'senha19'),
('Tiago', 'Nascimento', '8599991020', 'tiago20@gmail.com', 'Rua T, 120', 'Cliente', 'senha20'),
('Rodrigo', 'Viana', '854002-8922', 'rodrigoviana2203@gmail.com', 'Rua dos bobos, 123', 'ADM', 'senha21');

-- Ingredientes
INSERT INTO ingredientes (Nome_Ingrediente, Descricao, preco) VALUES
('Açaí', 'Fruta típica da região Norte, muito usada em sucos e tigelas', 15.50),
('Granola', 'Mistura crocante de cereais, sementes e frutas secas', 8.00),
('Leite Condensado', 'Leite concentrado adoçado usado em doces', 6.25),
('Morango', 'Fruta vermelha doce e suculenta', 12.00),
('Banana', 'Fruta amarela rica em potássio', 4.50),
('Mel', 'Doce natural produzido pelas abelhas', 20.00),
('Chocolate', 'Produto derivado do cacau, usado em sobremesas', 10.00),
('Coco Ralado', 'Coco desidratado e ralado', 5.75),
('Xarope de Guaraná', 'Adoçante feito de guaraná, usado em bebidas', 7.00),
('Açúcar', 'Ingrediente doce usado em diversas receitas', 3.20),
('Leite', 'Bebida nutritiva de origem animal', 3.80),
('Iogurte', 'Produto lácteo fermentado', 5.50),
('Chia', 'Semente rica em fibras e ômega-3', 9.00),
('Aveia', 'Cereal muito usado em preparações saudáveis', 6.00),
('Limão', 'Fruta cítrica usada para saborizar', 2.50),
('Goiaba', 'Fruta tropical rica em vitamina C', 4.00),
('Amêndoas', 'Fruta seca rica em gorduras boas', 18.00),
('Canela', 'Especiaria usada para dar sabor e aroma', 4.20),
('Manga', 'Fruta tropical doce', 5.00),
('Café', 'Bebida feita com grãos torrados de café', 7.50);

-- Estoque
INSERT INTO estoque (id_Ingrediente, quantidade) VALUES
(1, 100), (2, 150), (3, 200), (4, 120), (5, 130),
(6, 90), (7, 110), (8, 140), (9, 80), (10, 300),
(11, 250), (12, 180), (13, 100), (14, 160), (15, 90),
(16, 70), (17, 50), (18, 120), (19, 140), (20, 110);

-- Pedidos
INSERT INTO pedidos (id_Usuario, metodo_pagamento) VALUES
(1, 'Pix'),
(2, 'Dinheiro'),
(3, 'Cartão');

-- Personalizações
INSERT INTO personalizacao_pedido (
    id_Pedido, tamanho_copo,
    camada_1, camada_2, camada_3,
    fruta_1, fruta_2,
    complemento_1, complemento_2, complemento_3, complemento_4, complemento_5
) VALUES
(1, 'Grande', 'Leite Ninho', 'Granola', 'Nutella', 'Morango', 'Banana', 'Castanha de Caju', 'Amendoim Torrado', 'Coco Ralado', 'Chantilly', 'Aveia'),
(2, 'Médio', 'Leite Condensado', 'Paçoca', 'Mel', 'Kiwi', 'Manga', 'Gotas de Chocolate', 'Leite de Coco', 'Tapioca', 'Granulado Colorido', 'Cereal Matinal'),
(3, 'Pequeno', 'Creme de Le', 'Chocolate Granulado', 'Doce de Leite', 'Uva', 'Blueberry', 'Amendoim Torrado', 'Coco Ralado', 'Chantilly', 'Granulado Colorido', 'Aveia');


-- Adicionando pedido:
INSERT INTO pedidos (id_Usuario, metodo_pagamento) VALUES (21, 'Pix');

-- Botamos o id do usuario que está fazendo o pedido e a forma de pagamento
SET @novo_id_pedido = LAST_INSERT_ID();-- depois pegamos o id do pedido

-- então nós adicionamos a personalização do pedido:

INSERT INTO personalizacao_pedido (
    id_Pedido, tamanho_copo, camada_1, camada_2, camada_3,
    fruta_1, fruta_2, complemento_1, complemento_2, complemento_3, complemento_4, complemento_5
) VALUES (
    @novo_id_pedido, 'Pequeno',
    'Paçoca', 'Leite Condensado', 'Granola',
    'Manga', 'Acerola',
    'Tapioca', 'Chantilly', 'Cereal Matinal', 'Aveia', 'Coco Ralado'
);

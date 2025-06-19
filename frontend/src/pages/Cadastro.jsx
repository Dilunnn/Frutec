import React, { useState } from 'react';
import Navbar from '../components/Navbar'; 

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function cadastrarUsuario(nome, sobrenome, telefone, email, senha) {
        try {
            const response = await fetch('http://localhost:3000/CadastrarUsuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    sobrenome,
                    telefone,
                    email,
                    senha,
                }),
            });

            if (!response.ok) {
                console.log('Erro ao cadastrar');
                return;
            }

            const data = await response.json();
            alert('Cadastro realizado com sucesso:');
        } catch (error) {
            console.log('Erro:', error);
        }
    }

    const Submit = (e) => {
        e.preventDefault();
        cadastrarUsuario(nome, sobrenome, telefone, email, senha);
    };

    return (
        <>
            <style>{`
  body {
    background-color: #391942;
  }
`}</style>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">Cadastro</h2>
                            <form onSubmit={Submit}>
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" onChange={e => setNome(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                                    <input type="text" className="form-control" id="sobrenome" placeholder="Digite seu sobrenome" onChange={e => setSobrenome(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefone" className="form-label">Telefone</label>
                                    <input type="text" className="form-control" id="telefone" placeholder="Digite seu telefone" onChange={e => setTelefone(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Digite seu email" onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="senha" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="senha" placeholder="Digite sua senha" onChange={e => setSenha(e.target.value)}/>
                                </div>
                                <button type="submit" style={{ backgroundColor: '#391942', color: 'white' }} className="btn btn-primary w-100">Cadastrar</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cadastro;

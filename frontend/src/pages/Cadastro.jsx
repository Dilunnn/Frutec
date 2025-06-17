import React from 'react';
import Navbar from '../components/Navbar'; 

const Cadastro = () => {
    return (
        <>
            <style jsx>{`
        body {
            background-color: #391942;
        }
        `}</style>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">Cadastro</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" />
                                </div>
                                    <div className="mb-3">
                                    <label htmlFor="nome" className="form-label">Sobrenome</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Digite seu sobrenome" />
                                </div>
                                    <div className="mb-3">
                                    <label htmlFor="nome" className="form-label">Telefone</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Digite seu telefone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="senha" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="senha" placeholder="Digite sua senha" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cadastro;

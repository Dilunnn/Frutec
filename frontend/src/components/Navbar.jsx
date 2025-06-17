import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* Bootstrap CSS */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
                rel="stylesheet"
            />

            <style jsx>{`
        .navbar-purple {
        background-color: #391942 !important;
        }

        .navbar-brand,
        .nav-link {
        color: white !important;
        }

        .nav-link:hover {
        color: #e6ccff !important;
        }
        `}</style>

            <nav className="navbar navbar-expand-lg navbar-purple">
                <div className="container">
                    <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                        <img
                            src=""
                            alt=""
                            style={{ height: '40px', marginRight: '10px' }}
                        />
                        Frutec
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        style={{ borderColor: 'white' }}
                    >
                        <span
                            className="navbar-toggler-icon"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
                            }}
                        ></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cardapio" className="nav-link">Cardápio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cadastro" className="nav-link">Cadastro</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sobre" className="nav-link">Sobre</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contato" className="nav-link">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

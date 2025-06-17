import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Bootstrap CSS */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
                rel="stylesheet"
            />

            <style>{`
        .footer-black {
        background-color: #000000;
        color: white;
        }
        `}</style>

            <footer className="footer-black py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5> Frutec</h5>
                            <p className="mb-0">O melhor açaí da cidade!</p>
                        </div>
                        <div className="col-md-3">
                            <h6>Links Úteis</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white-50 text-decoration-none">Cardápio</a></li>
                                <li><a href="#" className="text-white-50 text-decoration-none">Delivery</a></li>
                                <li><a href="#" className="text-white-50 text-decoration-none">Promoções</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Contato</h6>
                            <p className="mb-1 small">📍 Rua do Açaí, 123</p>
                            <p className="mb-1 small">📞 (85) 99999-9999</p>
                            <p className="mb-0 small">📧 contato@frutec.com</p>
                        </div>
                    </div>
                    <hr className="my-3" style={{ borderColor: '#333' }} />
                    <div className="text-center">
                        <small>© 2025 Frutec. Todos os direitos reservados.</small>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
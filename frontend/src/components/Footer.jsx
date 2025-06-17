import React from 'react'
import frutec from '../assets/frutec.png'
import face from '../assets/face.svg'
import insta from '../assets/insta.svg'
import twiter from '../assets/twiter.svg'

const Footer = () => {
    return (
        <div>
      <div className="text-light pt-5 mt-2" style={{ backgroundColor: '#3c1a43' }}>
        <div className="container">
          <div className="row">
            
            <div className="col-md-3 mb-4">
              
                <img src={frutec} alt="Logo" className="me-2" style={{ width: "100px"}} />
              
            
              <div>
                <br />
                <a href="#" className="text-light me-3">
                <img src={face} alt="facebook" style={{ width: "25px", height: "25px"}} />
                </a>

                <a href="#" className="text-light me-3">
                <img src={insta} alt="instagram" style={{ width: "25px"}} />
                </a>

                <a href="#" className="text-light">
                  <img src={twiter} alt="twiter" style={{ width: "25px"}}/>
                </a>
              </div>
            </div>
  
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Informação</h6>
              <ul className="list-unstyled">
                {['Sobre Frutec', 'Blog', 'Trabalhe conosco', 'Meus Pedidos'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-light text-decoration-none">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Categorias</h6>
              <ul className="list-unstyled">
                {['Açai', 'Frooty Açai', 'Cupuaço', 'Cremes'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-light text-decoration-none">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="col-md-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Contato</h6>
              <address className="text-light">
                Av. Santos Dumont, 1510 – 1 andar <br />
                Aldeota, Fortaleza – CE, 60150-161 <br />
                (85) 3051-3411
              </address>
            </div>
          </div>
  
          <hr className="border-secondary" />
  
          <div className="text-center pb-3">
            © 2025 Frutec
          </div>
        </div>
      </div>
    </div>
    )
}

export default Footer;
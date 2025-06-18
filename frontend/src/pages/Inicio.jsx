import React from 'react';

const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 16,
    textAlign: 'center',
    width: '250px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    margin: '1rem',
    backgroundColor: '#fff',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '2rem',
};

const Inicio = () => {
    return (
        <div style={{ maxWidth: 900, margin: '2rem auto', padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#4B0082', textAlign: 'center' }}>Bem-vindo à Açaí Frutec!</h1>
            <p style={{ textAlign: 'center' }}>
                Sua loja de açaí natural e deliciosos acompanhamentos.
            </p>

            <h2 style={{ marginTop: '2rem', textAlign: 'center' }}>Nossos Sabores</h2>

            <div style={containerStyle}>
                <div style={cardStyle}>
                    <img
                        src="https://marciapolpas.azapi.com.br/_core/_uploads//2024/11/17341611249d1hhdkbgk.jpeg"
                        alt="Açaí Tradicional"
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                    
                    <h3>Açaí Tradicional</h3>
                    <p>O sabor clássico do açaí puro, refrescante e natural.</p>
                </div>

                <div style={cardStyle}>
                    <img
                        src="https://panfleteria.sfo2.digitaloceanspaces.com/uploads/ofertas/img/02-skina-do-pastel-oferta-de-acai-com-banana-e-granola-em-fortaleza.jpg"
                        alt="Açaí com Granola"
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                    <h3>Açaí com Granola</h3>
                    <p>Granola crocante para um toque especial no seu açaí.</p>
                </div>

                <div style={cardStyle}>
                    <img
                        src="https://frooty.com.br/wp-content/uploads/2022/10/Frooty_Brasil_0002-scaled-2.jpg"
                        alt="Açaí com Banana"
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                    <h3>Açaí com Banana</h3>
                    <p>Combinação perfeita de açaí com banana.</p>
                </div>

                <div style={cardStyle}>
                    <img
                        src="https://www.dielo.com.br/blog/wp-content/uploads/2024/05/BANNER-SITE-990x550-V2-990x550.png"
                        alt="Açaí com Morango"
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                    <h3>Açaí com Morango</h3>
                    <p>Doce e saboroso, com morangos fresquinhos.</p>
                </div>
            </div>

            <h2 style={{ marginTop: '3rem', textAlign: 'center' }}>Horário de Funcionamento</h2>
            <p style={{ textAlign: 'center' }}>Terça a Domingo: 17h - 23h</p>

        </div>
    );
};

export default Inicio;

import React, { useState, useEffect } from 'react';

const Perfil = () => {
  const [perfil, setPerfil] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const dataFromDatabase = {
        name: 'Maria Oliveira',
        email: 'maria.oliveira@example.com',
        phone: '(85) 98888888',
      };
      setPerfil(dataFromDatabase);
    };

    fetchData();
  }, []);

  return (
    <div style={{
      maxWidth: 400,
      margin: '40px auto',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#fafafa',
      color: '#333'
    }}>
      <h2 style={{ borderBottom: '2px solid #4B0082', paddingBottom: '10px', marginBottom: '20px', color: '#4B0082' }}>
        Perfil do Usuário
      </h2>

      <div style={{ marginBottom: '12px' }}>
        <strong>Nome:</strong> <span>{perfil.name}</span>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <strong>Email:</strong> <span>{perfil.email}</span>
      </div>

      <div>
        <strong>Telefone:</strong> <span>{perfil.phone}</span>
      </div>
    </div>
  );
};

export default Perfil;

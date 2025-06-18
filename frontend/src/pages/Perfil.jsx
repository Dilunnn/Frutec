import React, { useState, useEffect } from 'react';

const Perfil = () => {
  const [perfil, setPerfil] = useState({
    nome: '',
    sobrenome: '',
    senha: '',
    email: '',
    telefone: '',
    endereco: ''
  })

  useEffect(() => {
    localStorage.setItem('idUsuario', '10') // Apenas pra tesste
    const buscarPerfil = async () => {
      // Pegando o id do usuário do localStorage
      const id = localStorage.getItem('idUsuario')
      if (!id) return console.log(`Id não existe ou o usúario não logou`) /*Depois mandar o usúario para página de login */

      try {
        const response = await fetch(`http://localhost:3000/PerfilUsuario/${id}`)
        const data = await response.json()
        setPerfil({
          nome: data.Nome || '',
          sobrenome: data.Sobrenome || '',
          senha: data.Senha || '',
          email: data.Email || '',
          telefone: data.Telefone || '',
          endereco: data.Endereco || ''
        })
      } catch (error) {
        console.log('Erro ao buscar perfil:', error)
      }
    }

    buscarPerfil()
  }, [])

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
        <strong>Nome:</strong> <span>{perfil.nome} {perfil.sobrenome}</span>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <strong>Email:</strong> <span>{perfil.email}</span>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <strong>Telefone:</strong> <span>{perfil.telefone}</span>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <strong>Endereço:</strong> <span>{perfil.endereco}</span>
      </div>

      <div>
        <strong>Senha:</strong> <span>{perfil.senha}</span>
      </div>
    </div>
  );
};

export default Perfil;


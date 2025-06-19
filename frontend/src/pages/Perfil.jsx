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
  function Logout() {
    localStorage.clear(); 
    window.location.href = '/login';
  }
  
  function Apagarconta() {
   confirm('Tem certeza que deseja apagar a conta?') 
  }

  function alterarsenha() {
  const senhaAtual = prompt('Digite sua senha atual para poder alterar a senha:')
  
  if (senhaAtual === perfil.senha) {
    const novaSenha = prompt('Digite sua nova senha:')

    if (!novaSenha || novaSenha.trim() === '') {
      alert('Senha inválida.')
      return
    }

    const confirmar = confirm('Deseja realmente alterar sua senha?')

    if (!confirmar) return

    const id = localStorage.getItem('idUsuario')

    fetch(`http://localhost:3000/PerfilUsuario/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ senha: novaSenha })
    })
      .then(res => res.json())
      .then(data => {
        alert('Senha alterada com sucesso!')
        setPerfil(prev => ({ ...prev, senha: novaSenha }))
      })
      .catch(error => {
        console.error('Erro ao alterar a senha:', error)
        alert('Erro ao alterar a senha.')
      })

  } else {
    alert('Senha atual incorreta!')
  }
}


  useEffect(() => {
    localStorage.setItem('idUsuario', '23') // Apenas pra tesste
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

      <div style={{ marginBottom: '12px' }} className='d-flex justify-content-end' >
        <strong>Endereço:</strong> <span>{perfil.endereco}</span>
        <button className="btn btn-sm ms-auto" style={{ backgroundColor: '#391942', color: 'white' }} > Alterar </button>
      </div>

      <div style={{ marginBottom: '12px' }} className='d-flex justify-content-end'>
        <strong>Senha:</strong> <span>*****</span>
        <button className="btn btn-sm ms-auto" style={{ backgroundColor: '#391942', color: 'white' }} onClick={alterarsenha}> Alterar </button>
      </div>
      <hr />
      <div className='d-flex justify-content-between'>
        <button className='btn btn-danger' onClick={Apagarconta}>Apagar Conta</button>
        <button className='btn btn-sm border' style={{ backgroundColor: '#391942', color: 'white' }} onClick={Logout}>Logout</button>
      </div>
    </div>
  );
};

export default Perfil;


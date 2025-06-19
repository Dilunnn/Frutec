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

 
async function alterarsenha() {
  const id = localStorage.getItem('token');
  const senhaAtual = prompt('Digite sua senha atual:');
  if (!senhaAtual || senhaAtual.trim() === '') {
    alert('Senha atual não informada.');
    return;
  }

  const novaSenha = prompt('Digite sua nova senha:');
  if (!novaSenha || novaSenha.trim() === '') {
    alert('Senha inválida.');
    return;
  }

  if (novaSenha === senhaAtual) {
    alert('A nova senha não pode ser igual à atual.');
    return;
  }

  const confirmarSenha = prompt('Confirme a nova senha:');
  if (novaSenha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const confirmar = confirm('Deseja realmente alterar sua senha?');
  if (!confirmar) return;

  try {
    const resposta = await fetch(`http://localhost:3000/PerfilUsuario/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senhaAtual, senha: novaSenha })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      alert('Senha alterada com sucesso!');
    } else {
      alert(`Erro: ${dados.erro}`);
    }
  } catch (erro) {
    console.error('Erro ao alterar senha:', erro);
    alert('Erro ao alterar a senha.');
  }
}


  function alterarendereco() {
    const novoEndereco = prompt('Digite seu novo endereço:', perfil.endereco);
    if (novoEndereco === null) return;
    if (!novoEndereco.trim()) {
    alert('Endereço inválido.');
    return;
  }

  const id = localStorage.getItem('token');

  fetch(`http://localhost:3000/PerfilUsuario/endereco/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ endereco: novoEndereco.trim() })
  })
  .then(res => res.json())
  .then(data => {
    if (data.erro) {
      alert(`Erro: ${data.erro}`);
    } else {
      alert(data.mensagem);
      setPerfil(prev => ({ ...prev, endereco: novoEndereco.trim() }));
    }
  })
  .catch(() => alert('Erro ao atualizar endereço.'));
  }


  useEffect(() => {
    localStorage.setItem('token', '2') // Apenas pra tesste
    const buscarPerfil = async () => {
      // Pegando o id do usuário do localStorage
      const id = localStorage.getItem('token')
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
        <button className="btn btn-sm ms-auto" style={{ backgroundColor: '#391942', color: 'white' }} onClick={alterarendereco} > Alterar </button>
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


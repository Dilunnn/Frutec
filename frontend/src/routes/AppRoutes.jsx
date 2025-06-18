import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Perfil from '../pages/Perfil';
import Cardapio from '../pages/Cardapio';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/cardapio" element={<Cardapio />} />
    </Routes>
  );
}

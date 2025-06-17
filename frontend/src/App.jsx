import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cadastro from './pages/Cadastro'
import { BrowserRouter } from 'react-router-dom'
function App() {
  

  return (
    <>
        <div>
        <BrowserRouter>
        
        <Navbar/>

        <Cadastro/>

        <Footer/>

        </BrowserRouter>
        </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cadastro from './pages/Cadastro'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
function App() {
  

  return (
    <>
        <div>
        <BrowserRouter>
       
        
        <Navbar/>

        <AppRoutes/>

        <Footer/>

        </BrowserRouter>
        </div>
    </>
  )
}

export default App

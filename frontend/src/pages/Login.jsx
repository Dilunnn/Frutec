import React from 'react'
import frutec from '../assets/frutec.png'
import style from '../components/login.module.css'

const Login = () => {
  return (
    <>

          <div className="text-center" style={{  height: "750px" }}>
        <form className="form-signin">
          <img className="mb-4" src={frutec} alt="" style={{ width: "400px", height: "400px" }} />
          <h1 className="h3 mb-3 font-weight-normal">Faça Login</h1>
          <div className="row d-flex justify-content-center ">
            <div className="col-md-3 ">
              <label htmlFor="Email" className={style.formulario}>E-email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" id="userName" className="form-control" name='email' placeholder="E-mail"/>
              <br />
              <label htmlFor="password" className={style.formulario}>Senha</label>
              <input  onChange={(e) => setSenha(e.target.value)} type="password" id="senha" className="form-control" placeholder="Senha" />
            </div>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Lembrar de mim
            </label>
          </div>
          <button className='btn btn-lg btn-primary ' type="submit"  style={{ width: "470px", height: "50px", backgroundColor: '#3c1a43' }}>
            Login
          </button>
        </form>
      </div>
      
    </>
  )
}

export default Login

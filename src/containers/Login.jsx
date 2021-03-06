import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form action="" className="login__container--form">
        <input aria-label="Correo" type="text" className="input" placeholder="Correo" />
        <input aria-label="Contraseña" type="password" className="input" placeholder="Contraseña" />
        <button className="button" type="button">Inicia sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" name="" id="cbox1" value="true" /> 
            Recuerdame
          </label>          
        </div>
        <div className="login__container--remember-me">
          <label>
						<a href="/">Olvidé mi contraseña</a>
          </label>          
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} alt="Google" />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt="Google" />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className="login__container--register">
        No tienes ninguna cuenta &nbsp;
        <Link to="/register">
          Registrate
        </Link>
      </p>      
    </section>
  </section>
);

export default Login;

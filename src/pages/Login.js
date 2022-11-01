import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Login.module.css';
import loginContext from '../store/login-context';

const Login = () => {
  const loginCtx = useContext(loginContext);
  const history = useHistory();
  const email = useRef();
  const password = useRef();

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCclsjtBcrJCT0ARxC17b2-9U6rTpTkuLY',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.ok) {
        history.replace('/store');
        const data = await res.json();
        localStorage.setItem('tokenId', data.idToken);
        loginCtx.login(data.idToken);
        // console.log(data);
      } else {
        const data = await res.json();
        throw new Error(data.error.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className={classes.login}>
      <h1>The Generics</h1>
      <form className={classes.form} onSubmit={loginHandler}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' ref={email} />
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' ref={password} />
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

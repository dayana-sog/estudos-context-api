import React, { useContext } from 'react';

// import { Container } from './styles';

import { Context } from '../Context/AuthConfig';

function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  console.log(authenticated);

  return <button onClick={handleLogin} >Login</button>;
}

export default Login;
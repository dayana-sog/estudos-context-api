import React, { createContext, useState, useEffect } from 'react';

// import { Container } from './styles';

import api from '../services/api';
import history from '../history';

const Context = createContext();

function  AuthProvider({children}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin() {
    const { data: { token } } = await api.post('/authenticate');

    localStorage.setItem('token', JSON.stringify(token));

    // Deixa o Token ativo para todas as requisições da API
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);
    history.push('/users');
  }

  function handleLogOut() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;

    history.push('/login');
  }

  return (
  <Context.Provider value={{ authenticated, handleLogin, setLoading, handleLogOut, loading}}>
    {children}  
  </Context.Provider>);
}

export { Context, AuthProvider };
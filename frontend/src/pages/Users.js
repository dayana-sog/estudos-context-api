import React, { useState, useEffect, useContext } from 'react';

import api from '../services/api';

import { Context } from '../Context/AuthConfig';

export default function Users() {
  const { handleLogOut } = useContext(Context);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users');

      setUsers(data);
    })();
  }, []);

  return (
    <>
      <ul data-testid="users-list">
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.website})</li>
        ))}
      </ul>

      <button type="button" onClick={handleLogOut} >Sair</button>
    </>
  );
}
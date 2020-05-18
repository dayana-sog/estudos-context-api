import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Users from './pages/Users';

import { Context } from './Context/AuthConfig';

function CustonRoute({ isPrivate, ...rest }) {
  const { authenticated, loading } = useContext(Context);

  if (isPrivate && !authenticated) {
    return <Redirect to='/login' />
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return <Route {...rest} />
}

export default function Routes() {
  return (
    <Switch>
      <CustonRoute exact path="/login" component={Login} />
      <CustonRoute isPrivate exact path="/users" component={Users} />
    </Switch>
  );
}
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react'; //Cria o HTML fake

import Login from '~/pages/Login';

afterEach(cleanup);

describe('Login', () => {
  it('Should be able to do the log',() => {
    const { getByText } = render(<Login />);

    fireEvent.click(getByText('Login'));

    expect(getByText('Login')).toBeTruthy();
  });
});
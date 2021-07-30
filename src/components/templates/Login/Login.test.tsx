import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from '.';

describe('Login', () => {
  describe('Title', () => {
    it('should render sign in to your account title', () => {
      render(<Login />);

      const title = screen.getByText('Sign in to your account');

      expect(title).toBeInTheDocument();
    });
  });

  describe('Button', () => {
    it('should render login button', () => {
      render(<Login />);

      const button = screen.getByText('Login');

      expect(button).toBeInTheDocument();
    });
  });
});

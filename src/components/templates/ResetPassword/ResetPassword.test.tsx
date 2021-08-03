import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResetPassword } from '.';

describe('ResetPassword', () => {
  describe('Title', () => {
    it('should render reset your password title', () => {
      render(<ResetPassword />);

      const title = screen.getByText('Reset your password');

      expect(title).toBeInTheDocument();
    });
  });

  describe('Button', () => {
    it('should render email button link', () => {
      render(<ResetPassword />);

      const button = screen.getByText('Email Reset Link');

      expect(button).toBeInTheDocument();
    });

    it('should render back to login link', () => {
      render(<ResetPassword />);

      const button = screen.getByText('Back to login');

      expect(button).toBeInTheDocument();
    });
  });
});

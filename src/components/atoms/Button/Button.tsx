import { ButtonType } from 'antd/lib/button';
import React from 'react';
import { StyledButton } from './elements';

type Props = {
  children?: React.ReactNode;
  type?: ButtonType;
  loading?: boolean;
  onClick?: () => void;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Button({ children, type, onClick, ...extra }: Props) {
  return (
    <StyledButton type={type} onClick={onClick} {...extra}>
      {children}
    </StyledButton>
  );
}

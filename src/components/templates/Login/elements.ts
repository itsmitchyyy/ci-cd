import styled from 'styled-components';
import { theme } from '../../../config';

const HeaderContainer = styled.div`
  margin: 1rem 0;
`;

const FormWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 500px;
  padding: 1rem;
  justify-content: center;
  box-shadow: 10px 10px 20px 5px ${theme.colors.gray.primary};
`;

const ForgotPasswordContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;

export { FormContainer, HeaderContainer, ForgotPasswordContainer, FormWrapper };

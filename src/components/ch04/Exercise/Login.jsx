import React from 'react';
import styled from 'styled-components';

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const Login = () => {
  return (
    <LoginPage>
      <Title>Connectez-vous</Title>
      <Button onClick={() => alert('Connexion simulée')}>Se connecter</Button>
    </LoginPage>
  );
};

export default Login;

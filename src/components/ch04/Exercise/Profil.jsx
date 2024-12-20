import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Profil = () => {
  const { id } = useParams();

  return (
    <ProfilePage>
      <Title>Profil de l'utilisateur</Title>
      <p>ID de l'utilisateur : {id}</p>
    </ProfilePage>
  );
};

export default Profil;

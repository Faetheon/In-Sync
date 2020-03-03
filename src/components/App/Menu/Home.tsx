import React from 'react';
import Card from 'sharedComponents/Card';
import styled from 'styled-components';

const HomePage = styled.div`
  display: flex;
  justify-content: center;
  height: 750px;
`;

const Home = () => {

  return (
    <HomePage>
      <Card />
    </HomePage>
  );
}

export default Home;
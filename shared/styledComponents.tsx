import styled from 'styled-components';

// Menu
export const TopBar = styled.div`
display: flex;
justify-content: space-around;
font-size: 20px;
font-weight: bold;
margin: 0;
`;

export const TopBarOption = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  height: 100px;
  flex-grow: 1;
  background-image: linear-gradient(#4d4d4d, #808080, white);
  justify-content: center;
  cursor: pointer; 
`;

// App
export const Footer = styled.div`
  height: 200px;
  padding-top: 50px;
`;
export const MenuContainer = styled.div``;

// Home
export const HomePage = styled.div`
  display: flex;
  justify-content: center;
  height: 750px;
`;

// Card
export const CardBody = styled.div`
  display: flex;
  border: 4px solid black;
  border-radius: 5%;
  width: 90%;
  height: 90%;
  box-shadow: 10px 5px 10px grey;
  margin-top: 6%;
`;
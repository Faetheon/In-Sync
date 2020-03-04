import styled from 'styled-components';

// @MainComponents

// AboutMe
export const InformationBit = styled.div`
display: flex;
font-size: 17px;
margin: 6px 10px;
`;

// App
export const Footer = styled.div`
  height: 200px;
  padding-top: 50px;
`;
export const MenuContainer = styled.div``;

// Home

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
  background-image: linear-gradient(#4d4d4d, #808080, #fff);
  justify-content: center;
  cursor: pointer; 
`;

// SideApps
export const App = styled.div``;

// @SharedComponents
// Card
// CardBody
export const CardBody = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: 0 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-flow: column;
  border: 4px solid black;
  border-radius: 5%;
  flex-grow: 1;
  box-shadow: 10px 5px 10px grey;
  margin-top: 6%;
  margin-left: 3%;
  margin-right: 3%;
  max-height: 30%;
`;
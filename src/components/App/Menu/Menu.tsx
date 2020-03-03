import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const TopBar = styled.div`
display: flex;
justify-content: space-around;
font-size: 20px;
font-weight: bold;
margin: 0;
`;

const TopBarOption = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  height: 100px;
  flex-grow: 1;
  background-image: linear-gradient(#4d4d4d, #808080, white);
  justify-content: center;
  cursor: pointer; 
`;

interface Menu {
  handleClick: Function
}

function Menu(props: any) {
  function handleClick(location: string) {
    props.history.push(location);
  };

  return (
    <TopBar>
      <TopBarOption onClick={() => handleClick('/Home')}>
        Home
      </TopBarOption>
      <TopBarOption onClick={() => handleClick('/Apps')}>
        Apps
      </TopBarOption>
      <TopBarOption onClick={() => handleClick('/AboutMe')}>
        About Me
      </TopBarOption>
    </TopBar>
  );
}

export default withRouter(Menu);
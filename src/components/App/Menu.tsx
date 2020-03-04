import React from 'react';
import { withRouter } from 'react-router-dom';
import { TopBar, TopBarOption } from 'sharedFiles/styledComponents';

interface Menu {
  handleClick: Function;
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
      <TopBarOption onClick={() => handleClick('/SideApps')}>
        Side Apps
      </TopBarOption>
      <TopBarOption onClick={() => handleClick('/AboutMe')}>
        About Me
      </TopBarOption>
    </TopBar>
  );
}

export default withRouter(Menu);
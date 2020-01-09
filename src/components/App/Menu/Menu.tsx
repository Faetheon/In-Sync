import React from 'react';
import { withRouter } from 'react-router-dom';

interface Menu {
  handleClick: Function
}

function Menu(props: any) {
  function handleClick(location: string) {
    console.log();
    props.history.push(location);
  };

  return (
    <div className='menu'>
      <div className='home' onClick={() => handleClick('/Home')}>
        Home
      </div>
      <div className='apps' onClick={() => handleClick('/Apps')}>
        Apps
      </div>
      <div className='about-me' onClick={() => handleClick('/AboutMe')}>
        About Me
      </div>
    </div>
  );
}

export default withRouter(Menu);
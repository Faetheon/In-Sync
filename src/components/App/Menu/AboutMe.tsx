import React from "react";

import { useSelector } from 'react-redux';

import { ReduxStore } from 'interfaces/redux';

const AboutMe = () => {
  const aboutNathan = useSelector((state: ReduxStore) => state.aboutNathan);
  return (
    <div>
      <div>Me: {aboutNathan.name}</div>
      <div>My mission: {aboutNathan.mission}</div>
    </div>
  );
}

export default AboutMe;

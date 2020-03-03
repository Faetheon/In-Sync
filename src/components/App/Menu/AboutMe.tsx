import React from "react";

import { useSelector } from 'react-redux';

import { ReduxStore } from 'interfaces/redux';

const AboutMe = () => {
  const aboutNathan = useSelector((state: ReduxStore) => state.aboutNathan);
  return (
    <div>
      <div>Me: {aboutNathan.name}</div>
      <div>My mission: {aboutNathan.mission}</div>
      <div>What I enjoy: {aboutNathan.likes.reduce((acc, curr) => acc += ` ${curr}`, '')}</div>
      <div>My dream: {aboutNathan.dream}</div>
      <div>Education: {aboutNathan.education.reduce((acc, curr) => acc += ` ${curr}`, '')}</div>
      <div>About Me: {aboutNathan.aboutMe}</div>
    </div>
  );
}

export default AboutMe;

import React from "react";

import { useSelector } from 'react-redux';

import { ReduxStore } from '@interfaces/interfaces.js';
import Skills from "../Skills";

const AboutMe = () => {
  const aboutNathan = useSelector((state: ReduxStore) => state.aboutNathan);

  return (
    <div>
      <div>My name: {aboutNathan.name}</div>
      <div>My age: {aboutNathan.age}</div>
      <div>
        Skills I've aquired:
          </div>
      <Skills />
    </div>
  );
}

export default AboutMe;

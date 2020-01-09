import React from "react";

import { useSelector } from 'react-redux';

import { ReduxStore, Item, Nathan } from '../../../ts-interfaces/interfaces.js';
import Skills from "./Skills";

interface AboutMe {
  props: {
    items: Array<Item>,
    aboutNathan: Nathan,
  },
  generateSkills: Function,
}

const AboutMe = () => {
  const aboutNathan = useSelector((state: ReduxStore) => state.aboutNathan);

  // class AboutMe extends React.Component {



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

import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../../ts-interfaces/interfaces';

const Skills = () => {
  const skills = useSelector((state: ReduxStore) => state.aboutNathan.skills);

  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.name}>
          {skill.name}
          <div>
            How long I've worked with {skill.name}: {skill.workExp === 1 ? `${skill.workExp} year` : `${skill.workExp} years`}
          </div>
          {
            skill.parent ? `Library of ${skill.parent}` : ''
          }
        </div>
      ))}
    </div>
  );
};

export default Skills;
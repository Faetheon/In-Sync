import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxStore } from 'interfaces/interfaces';

const Skills = () => {
  const skills = useSelector((state: ReduxStore) => state.aboutNathan.skills);

  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.name}>
          {skill.name}
          {
            skill.parent ? `Library of ${skill.parent}` : ''
          }
        </div>
      ))}
    </div>
  );
};

export default Skills;
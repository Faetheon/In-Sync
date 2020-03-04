import React from "react";
import { useSelector } from 'react-redux';

import { ReduxStore } from 'interfaces/redux';
import { CardBody, Card, InformationBit } from 'sharedFiles/styledComponents';

const AboutMe = () => {
  const aboutNathan: Array<string> = useSelector((state: ReduxStore) => state.aboutNathan);
  return (
    <CardBody>
      <Card>
        {
          aboutNathan.map((info: string) =>
            <InformationBit key={info}>{info}</InformationBit>
          )
        }
      </Card>
    </CardBody>
  );
}

export default AboutMe;

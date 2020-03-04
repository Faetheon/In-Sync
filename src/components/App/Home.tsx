import React from 'react';

import { CardBody, Card, InformationBit } from 'sharedFiles/styledComponents'

const Home = () => {
  console.log('test');

  return (
    <CardBody>
      <Card>
        <InformationBit>
          Wow! You've just barely landed here. Feel free to explore this small piece of myself!
        </InformationBit>
      </Card>
    </CardBody>
  );
}

export default Home;
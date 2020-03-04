import React from 'react';

import { CardBody, Card, InformationBit } from 'sharedFiles/styledComponents';

// Github projects I wish to display.
const SideApps = () => {
  console.log('test');
  return (
    <CardBody>
      <Card>
        <InformationBit>
          Once I integrate Githubs api I will populate this with previews of my projects
        </InformationBit>
      </Card>
    </CardBody>
  );
};

export default SideApps;
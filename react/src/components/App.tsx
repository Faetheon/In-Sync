import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from "../redux/store.ts";
import {defaultState} from '../redux/reducer.ts';

import ToDO from './ToDO.tsx';
// import Header from './Header.tsx';
// import {ReduxStore} from '../ts-interfaces/interfaces.js';
// import {Item} from '../ts-interfaces/interfaces.js';

const reduxStore = configureStore(defaultState);

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {/* <Header /> */}
          <ToDO />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
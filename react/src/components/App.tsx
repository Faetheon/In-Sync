import React from 'react';
import ToDO from './ToDO.jsx';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from "../redux/store.js";
import {defaultState} from '../redux/reducer.js';
// import {ReduxStore} from '../ts-interfaces/interfaces.js';
// import {Item} from '../ts-interfaces/interfaces.js';

const reduxStore = configureStore(defaultState);

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">ToDO Redux app</h1>
          </header>
          <ToDO />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
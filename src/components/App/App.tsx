import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "../../redux/store";
import { defaultState } from '../../redux/reducer';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AboutMe from './Menu/AboutMe/AboutMe';
import Menu from './Menu/Menu';
import Home from './Menu/Home';
import Apps from './Menu/Apps';
// import {ReduxStore} from '../ts-interfaces/interfaces.js';
// import {Item} from '../ts-interfaces/interfaces.js';

const reduxStore = configureStore(defaultState);
const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <Router history={history}>
          <div className="App">
            <Menu />
          </div>
          <Switch>
            <Route exact path='/Apps' render={() => <Apps />} />
            <Route exact path='/AboutMe' render={() => <AboutMe />} />
            <Route exact path='/Home' render={() => <Home />} />
          </Switch>
        </Router>
      </ReduxProvider>
    );
  }
}

export default App;
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "../../redux/store";
import { defaultState } from '../../redux/reducer';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';

import AboutMe from './Menu/AboutMe/AboutMe';
import Menu from './Menu/Menu';
import Home from './Menu/Home';
import Apps from './Menu/Apps';
// import {ReduxStore} from '../@interfaces/interfaces.js';
// import {Item} from '../@interfaces/interfaces.js';

const reduxStore = configureStore(defaultState);
const history = createBrowserHistory();
const Footer = styled.div`
  height: 200px;
  padding-top: 50px;
`;
const MenuContainer = styled.div``;

const App = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <Router history={history}>
        <MenuContainer>
          <Menu />
        </MenuContainer>
        <Switch>
          <Route exact path='/Apps' render={() => <Apps />} />
          <Route exact path='/AboutMe' render={() => <AboutMe />} />
          <Route exact path='/Home' render={() => <Home />} />
        </Switch>
        <Footer />
      </Router>
    </ReduxProvider>
  )
}

export default App; 
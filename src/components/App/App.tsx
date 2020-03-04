import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "../../redux/store";
import { defaultState } from '../../redux/reducer';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AboutMe from './AboutMe';
import Menu from './Menu';
import Home from './Home';
import SideApps from './SideApps';
import { Footer, MenuContainer } from 'sharedFiles/styledComponents';

const reduxStore = configureStore(defaultState);
const history = createBrowserHistory();

// Main entry point for all components
const App = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <Router history={history}>
        <MenuContainer>
          <Menu />
        </MenuContainer>
        <Switch>
          <Route exact path='/SideApps' render={() => <SideApps />} />
          <Route exact path='/AboutMe' render={() => <AboutMe />} />
          <Route exact path='/(|Home)' render={() => <Home />} />
        </Switch>
        <Footer />
      </Router>
    </ReduxProvider>
  )
}

export default App; 
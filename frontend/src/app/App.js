import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './shared/Header';
import HomePage from './home/HomePage';
import SearchPage from './search/SearchPage';
import AddAttackPage from './add/AddAttackPage';
import NotFound from './NotFound';

export default class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <Header/>
          <div className="container">
            <Switch>
              <Route path="/" exact={true} component={HomePage}/>
              <Route path="/search" component={SearchPage}/>
              <Route path="/add" component={AddAttackPage}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

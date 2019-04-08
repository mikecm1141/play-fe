import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Search from './Search';
import Playlists from './Playlists';
import Favorites from './Favorites';

import '../styles/reset.css';
import '../styles/main.css';

export default class App extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/playlists' component={Playlists} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
        <NavBar />
      </div>
    )
  }
}

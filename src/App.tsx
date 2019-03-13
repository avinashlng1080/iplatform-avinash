import './App.css';

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import { NavBar } from './components'
import { ArtistFinder, UserFavorites, MusicReleases } from './containers'
import { routeArtistFinder, routeUserFavorites, routeMusicReleases } from './utils/StringContants'

class App extends Component {
  componentDidMount() {
    // something
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          {/* Add react-router here for routes /favorite and /home */}
          <Switch>
            <Route path={routeMusicReleases} component={MusicReleases} />
            <Route path={routeArtistFinder} component={ArtistFinder} />
            <Route path={routeUserFavorites} component={UserFavorites} />
            <Redirect from="/" to={routeMusicReleases} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

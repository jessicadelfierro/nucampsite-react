import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';

//container component

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }

  render() {
    //locally scoped component (defined inside of main component, so only accessible from the main component)
    const HomePage = () => {
      return (
        <Home />
      );
    }


    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

//set up router logic under the <Header />
//the first <Route> will route any traffic that tries to go to the path 'home' to the HomePage
//the second <Route> will also have a path and a boolean attribute named exact to match that exact path(directory), the render function returns the directory component
//the <Redirect> component acts like a catch-all such as the default statement in a JS switch statement
//any routing request that comes through will go through this switch component until it finds a matching route. if there are none, it will end up at the redirect component which will send them to whatever path is there (in this case is home).

export default Main;

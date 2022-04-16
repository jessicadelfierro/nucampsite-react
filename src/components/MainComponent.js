import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

//container component

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS
    };
  }

  render() {
    //locally scoped component (defined inside of main component, so only accessible from the main component)
    //arrow functions inherit the 'this' of their parent scope
    const HomePage = () => {
      return (
        <Home 
          campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
          partner={this.state.partners.filter(partner => partner.featured)[0]}
        />
      );
    }

    //when you have a number thats been stored as a string & you want to convert to a number use +"NumberAsString" (ie: +"300")
    const CampsiteWithId = ({match}) => {
      return (
        <CampsiteInfo 
          campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
          comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} 
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
          <Route path='/directory/:campsiteId' component={CampsiteWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

//set up router logic under the <Header />

//the first <Route> will route any traffic that tries to go to the path 'home' to the HomePage
//just routing to the component without passing along any state data then you use the component attribute

//the second <Route> will also have a path and a boolean attribute named exact to match that exact path(directory), the render function returns the directory component
//if you need to pass state data as props to the component that you're routing to, use the render syntax (like for directory)

//the ':' in the 3rd <Route> tells the router that what follows the forward slash is going to be a parameter, takes whatever that is and puts it inside the property campsiteID

//the <Redirect> component acts like a catch-all such as the default statement in a JS switch statement
//any routing request that comes through will go through this switch component until it finds a matching route. if there are none, it will end up at the redirect component which will send them to whatever path is there (in this case is home).


export default Main;

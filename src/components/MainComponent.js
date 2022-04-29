import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchCampsites } from '../redux/ActionCreators';

//get the state from redux by setting up the mapStateToProps()
//change everything in the main component that had this.state to this.props
const mapStateToProps = state => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions
  }
}

const mapDispatchToProps = {
  addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text)),
  fetchCampsites: () => (fetchCampsites())
};

//container component
class Main extends Component {

  componentDidMount() {
    this.props.fetchCampsites();
  }

  render() {
    //locally scoped component (defined inside of main component, so only accessible from the main component)
    //arrow functions inherit the 'this' of their parent scope
    const HomePage = () => {
      return (
        <Home 
          campsite={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
          campsitesLoading={this.props.campsites.isLoading}
          campsitesErrMess={this.props.campsites.errMess}
          promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
          partner={this.props.partners.filter(partner => partner.featured)[0]}
        />
      );
    }

    //when you have a number thats been stored as a string & you want to convert to a number use +"NumberAsString" (ie: +"300")
    const CampsiteWithId = ({match}) => {
      return (
        <CampsiteInfo 
          campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
          isLoading={this.props.campsites.isLoading}
          errMess={this.props.campsites.errMess}
          comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} 
          addComment={this.props.addComment}
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />
          <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
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

//the home <Route> will route any traffic that tries to go to the path 'home' to the HomePage
//just routing to the component without passing along any state data then you use the component attribute

//the directory <Route> will also have a path and a boolean attribute named exact to match that exact path(directory), the render function returns the directory component
//if you need to pass state data as props to the component that you're routing to, use the render syntax (like for directory)

//the ':' in the campsiteWithId <Route> tells the router that what follows the forward slash is going to be a parameter, takes whatever that is and puts it inside the property campsiteID

//the <Redirect> component acts like a catch-all such as the default statement in a JS switch statement
//any routing request that comes through will go through this switch component until it finds a matching route. if there are none, it will end up at the redirect component which will send them to whatever path is there (in this case is home).

//allows the main component to take state from the redux store
//withRouter will allow react router to work with redux
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

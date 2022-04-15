import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { CAMPSITES } from '../shared/campsites';

//container component

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null
    };
  }

  onCampsiteSelect(campsiteId) {
    this.setState({selectedCampsite: campsiteId});
    //DO NOT DO THIS: this.state.selectedCampsite = campsite;
    //outside of constructor, ALWAYS use setState (for react to make updates to the DOM properly)
    //constructor is the only place where you can assign a value to state properties directly with '=' 
}

  render() {
    return (
      <div>
        <Header />
        <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
        <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
        <Footer />
      </div>
    );
  }
}

export default Main;

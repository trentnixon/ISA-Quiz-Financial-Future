import React, { Component } from 'react';
import ReactGA from 'react-ga';

import LoadingScreen from "./js/pages/Loading";
import Main from "./js/pages/Main";

// Import Functions
import { connect } from "react-redux";
import { FetchData } from "./actions/Load";


// Include CSS
import './App.css';
/**
 * Fetch the project Content an dset up the UI
 */
const Content = new FetchData();
 
/**
 * Dev/production enviroment Variables
 */

let http =null, Bottom= false;
const Path='assets/';
const Images='images/';

// EDIT THESE VALUES FOR EACH PROJECT
const CDN = 'https://gdn-cdn.s3.amazonaws.com/embed/2019/04/financial-future/';
const GDID="1nOpa6Spwwj6m7Msu9eI1AlI0RKieEEFCcMCusdiilps"
const GACode='UA-76345112-20';
// Include the Glabs Sheet label of which Interactive data will be used
// [Interactive_LongForm, Interactive_List, Interactive_Flipcards, Interactive_ImageGrid]
const AppType =['Quiz_Questions','Quiz_Answers','Quiz_Results'];

/** End Edit  */

if(process.env.NODE_ENV === 'development'){ http = '/';}
else if(process.env.NODE_ENV === 'production'){ http = CDN; }
Content.start(http+Path+Images, GDID, AppType);  

/**
 * GA Commands
 */
ReactGA.initialize(GACode);
ReactGA.pageview(window.location.pathname + window.location.search);

// Raise an Event is the user scrolls to the bottom of the Page
window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    if(Bottom === false){  
      ReactGA.event({
          category: 'Scroll',
          action: "@ the Bottom",
          label:"User scrolled to the bottom of the page"
        });
      Bottom = true
    }
  }
}

class App extends Component {
  componentWillMount(){}
  componentDidMount(){}
  render() {    
    if(this.props.UI.UI_SET !== false){
      return ( <Main {... this.props}/>);
    }else{
      return( <LoadingScreen {... this.props}/> )
    }
  }
}

const mapStateToProps = (state) => ({
  UI: state.UI,
  APP: state.APP,
  QUIZSTATE:state.QUIZSTATE
})
export default connect(mapStateToProps)(App);
// export default App;
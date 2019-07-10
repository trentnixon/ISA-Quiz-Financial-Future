import React, { Component } from 'react';

export default class HeaderTitle extends Component { 
    
  DisplayTitle = (Title) => { if (Title) {  return <h1>{Title}</h1>}}

  render() {
    return ( 
        <div id="ProjectTitle" className="container-fluid Title">
        <div className="container Title-Container">
            {this.DisplayTitle(this.props.Header)}
            {this.DisplayTitle(this.props.SubHeader)}
        </div>
        <div className="Title-Fill-Color"></div>
    </div>
    );
  } 
} 
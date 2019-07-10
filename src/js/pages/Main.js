import React, { Component } from 'react';
// Import Layout Components
import OuterShell from "../dom/OuterShell";
// Application
import Quiz from "../Application/Quiz_Weighted_Questions/Quiz_Weighted_Questions";
// Use this component to build up the Project Layout
export default class Main extends Component {
  render() {
    
    //console.log(this.props)
    return (
        <div className="container-fluid" id="Glabs">
          <OuterShell  {... this.props} >
              <Quiz 
                  App={this.props.APP.APPLICATION} 
                  QUIZSTATE={this.props.QUIZSTATE}
                />
          </OuterShell>
        </div>
        ) 
  }
} 
  
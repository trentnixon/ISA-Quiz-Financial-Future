import React, { Component } from 'react';
import QuizWrapper from "./js/components/structure/QuizWrapper";
import QuizSetup from "./Stages/Quiz_SETUP"
import QuizReady from "./Stages/Quiz_READY";


export default  class Default extends Component {
  
 

  render() {

   if(this.props.QUIZSTATE.QUIZSTATE === false){
    return(
      <QuizWrapper > 
             <QuizSetup  {... this.props} />
      </QuizWrapper> 
    )
    
   }else{
      return(
        <QuizWrapper > 
            <QuizReady {... this.props} />
        </QuizWrapper> 
    )
    }
  }
}
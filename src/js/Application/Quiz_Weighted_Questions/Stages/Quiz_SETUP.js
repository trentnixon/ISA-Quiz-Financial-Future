import React, { Component } from 'react';
import { SetUpQuizState } from "../actions/actions";

const Quiz = new SetUpQuizState();

export default  class Default extends Component {
  
  componentWillMount(){
    
    Quiz.QuestionsMeta = this.props.App[0];
    Quiz.QuestionsAnswers = this.props.App[1];
    Quiz.QuizResults = this.props.App[2];
  
    Quiz.Start();

  }

  shouldComponentUpdate(){return false;}
  componentDidUpdate(nextProps, nextState){}
  
  render() {
 //console.log(this.props);

 return(
    <div>
      Setup
    </div>
  )
  }
}
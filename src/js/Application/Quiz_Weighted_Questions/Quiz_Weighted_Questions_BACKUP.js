import React, { Component } from 'react';
import QuizWrapper from "./js/components/structure/QuizWrapper";
import QuestionList from "./js/components/Question_List";
import Result from "./js/components/structure/ResultsPending";
import ScoreBoard from "./js/components/structure/VisualScoreBoard";


import { SetUpQuizState } from "./actions/actions";

const Quiz = new SetUpQuizState();

let Progress=0,Score=0, CurrentQuestion, QuizPosition=0;
export default  class Default extends Component {
  state = {
    Completed:false,
    QuizPosition:0, 
    CurrentQuestion:false

  };

  PickQuestion(questions, id){  
    CurrentQuestion = questions[id];
    QuizPosition = id;
    this.setState({
      QuizPosition:id,
      CurrentQuestion:questions[id]
    }) 
   //console.log(CurrentQuestion,QuizPosition);
  }

  componentWillMount(){
    
    //console.log(this.props.App);
    //console.log(this.props.App[0]);

    Quiz.QuestionsMeta = this.props.App[0];
    Quiz.QuestionsAnswers = this.props.App[1];
    Quiz.QuizResults = this.props.App[2];

    
    Quiz.Start();
    
    //this.PickQuestion(this.props.QUIZSTATE.APPLICATION.Quiz,this.props.QUIZSTATE.CurrentQuestion)
  }

  shouldComponentUpdate(){return true;}

  componentDidUpdate(nextProps, nextState){
    
    if(
        this.props.QUIZSTATE.Completed === false && 
        this.props.QUIZSTATE.PushToNext === true &&
        this.state.QuizPosition !== this.props.QUIZSTATE.CurrentQuestion)
        {
        //  this.PickQuestion(this.props.QUIZSTATE.APPLICATION.Quiz,this.props.QUIZSTATE.CurrentQuestion)
      }
  }
  
  render() {
 //console.log(this.props);

   if(this.props.QUIZSTATE.QUIZSTATE !== false){
     // move up
    // reset Values  
    Progress=0;
    Score=0;
      // eslint-disable-next-line 
      this.props.QUIZSTATE.QUIZSTATE.map((state,i)=>{
          if(state.answered === true){
            Progress++
          }  
          if(state.value === true){
            Score++
          } 
      })
   }


/**
 *  <ScoreBoard 
                    Progress={Progress}
                    Score={Score}
                    Total={this.props.QUIZSTATE.num} 
                    {... this.props} 
                  />
                <QuestionList 
                  {... this.props}
                  CurrentQuestion={this.state.CurrentQuestion}
                  QuizPosition={this.state.QuizPosition}
                />
 */

   if(this.props.QUIZSTATE.Completed === false){
    return(
      <QuizWrapper > 
             
      </QuizWrapper> 
    )
    
   }else{
    return(
      <div id="ResultWrapper">
        <Result 
                Progress={Progress}
                Score={Score}
                Total={this.props.QUIZSTATE.num}
                {... this.props}
        />
      </div>
   )
    }
  }
}
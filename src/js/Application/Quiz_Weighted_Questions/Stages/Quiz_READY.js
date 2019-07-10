import React, { Component } from 'react';
import QuestionList from "../js/components/Question_List";
import ScoreBoard from "../js/components/structure/VisualScoreBoard";
import Result from     "../js/components/structure/ResultsPending";

let QuizState;
export default  class QuizReady extends Component {


  shouldComponentUpdate(){return true;}

  componentDidUpdate(nextProps, nextState){  }
  
  render() {
   
    QuizState = this.props.QUIZSTATE;

   if(QuizState.Completed === false){
    return(
            <div>
                <ScoreBoard 
                    QuizState={ QuizState }
                />
                
                <QuestionList  
                        CurrentQuestion={QuizState.CurrentQuestion}
                        QuizPosition={QuizState.QuizPosition}
                        {... this.props}
                    />
            </div>
    )
    
   }else{
    return(
        <div id="ResultWrapper"className="col-md-8 col-sm-12">
                <Result  QuizState={ QuizState } />  
        </div>    
          
    )
    }
  }
}
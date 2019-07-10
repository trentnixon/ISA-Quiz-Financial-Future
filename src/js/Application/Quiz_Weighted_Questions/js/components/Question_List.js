import React, { Component } from 'react';
import DisplayAnswers from './utils/DisplayAnswers';

// Use this component to build up the Project Layout
export default class QuestionList extends Component {
  
  componentDidMount(){
   // let elmnt = document.getElementById("QuizWrapper");
   // elmnt.scrollIntoView(true); 
  }
  shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

  render() {
 //console.log(this.props.QUIZSTATE.QUIZSTATE)
  
    return (
        <div className="QuizList container">
              {
                this.props.QUIZSTATE.QUIZSTATE.map((question,i)=>{
                //console.log(question.Answers)
                    return(
                      <section key={i}  id={"question_"+i} >
                        <DisplayAnswers 
                            Question={question}  
                            num={i}
                            PushToNext={this.props.QUIZSTATE.PushToNext}
                            QuizState = {this.props.QUIZSTATE.QUIZSTATE}
                        />
                      </section> 
                    )
                  }) 
              }
        </div>
      )  
  }
} 
import React, { Component } from 'react';
import Dots from "../utils/ScoreBoardDots";
import Gauge from "../utils/gauge";

export default  class VisualScoreboard extends Component {
componentWillMount(){}
  render() {
   //console.log(this.props.QuizState)
    /*
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

     <Dots {... this.props} />
    */
    if(this.props.QuizState.QUIZSTATE !== false){
        return(
            <div className="" id="Scoreboard">
                  <div className="tracking">
                   
                        <div className="inner">
                          <Gauge {... this.props}/>
                        </div>
                        <Dots {... this.props} />
                    
                  </div>
            </div>
          )
      }
    else{ return(<div></div>) } 
  }
}
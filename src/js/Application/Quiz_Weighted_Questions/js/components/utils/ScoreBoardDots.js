import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

let Width=0;
export default  class ScoreBoardDots extends Component {
 
componentWillMount(){}
  render() {
    Width = 100/this.props.QuizState.QUIZSTATE.length;
    return(  
        <ul className="TrackingDots">
            {
                // eslint-disable-next-line
                this.props.QuizState.QUIZSTATE.map((score,i)=>{ 
              
                                    if(score.answered === true){
                                        
                                        return(
                                            <li key={i} style={{width:Width+'%'}} className={score.value ? "correct" : "incorrect"}>
                                                <AnchorLink offset='100' href={"#question_"+i}> </AnchorLink>
                                            </li>
                                        )
                                    }
                                    else{
                                        return(
                                            <li key={i} style={{width:Width+'%'}} className={"default"} >
                                                <AnchorLink offset='100' href={"#question_"+i}>  </AnchorLink>
                                            </li>
                                        )
                                    }
                              })
            }
        </ul>
      )
  }
}
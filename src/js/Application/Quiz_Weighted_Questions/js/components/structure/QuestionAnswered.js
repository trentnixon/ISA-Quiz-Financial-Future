import React, { Component } from 'react';
//import CountDownTimer from "../utils/countdownTimer";
import {Animated} from "react-animated-css";
 

let animate=null, Value=false, Response=false;
export default  class Default extends Component {
  componentWillMount(){}
  render() { 
   //console.log(this.props)
    Response = this.props.Question.Response["0"].Answer["0"];
   animate = Response.animate["0"];
   Value = this.props.QuizState[this.props.num].value;
  
    return(
      <div className="container" >
        <div id="Answer" className={Value ? "correct" : "incorrect"}>
          <div className="row">
            <div className="col-12">
              <div className={"AnimateInThis " + animate.position}>
                <Animated animationIn="bounceInDown" nimationInDelay={0} animationOut="fadeOut" isVisible={true}>
                  <div className="speechbubble">
                    {
                      // eslint-disable-next-line
                        this.props.Question.Answers.map((a,i)=>{
                              if(a.Result === true){
                                return(
                                  <h2 key={i}>
                                      A. {a.Label} 
                                  </h2>
                                )
                              }
                          })
                        }
                        {
                            Response.Copy.map((p,i)=>{ 
                              return(
                                <p key={i}>
                                  {p}
                                </p>
                              )
                            })
                        }
                  </div>
                </Animated>
                <div id="icon">
                  <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                    <img src={"/assets/icons/"+animate.icon} alt="" />
                  </Animated>
                </div>   
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
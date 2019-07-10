import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
let Review,Btn_Icon = faQuestionCircle,DisplayClass='';
export default  class ResultReview extends Component {
componentWillMount(){}
  render() {
     
      Review = this.props.APP.APPLICATION.Quiz;

    return(
        <div>
            {
                // eslint-disable-next-line
                Review.map((response,i)=>{
                        let Display = response.Response["0"].Review["0"];
                        let CTA;
                        //console.log(Display)


                        if(this.props.APP.QUIZSTATE[i].value === true){
                            DisplayClass='Correct';
                            Btn_Icon = faCheckCircle;
                          }
                          else{
                            DisplayClass='InCorrect';
                            Btn_Icon = faTimesCircle;
                          }
                    
                          if(Display.CTA)
                          {
                            CTA = <Button variant="contained" color="secondary" target="_blank" href={Display.CTA["0"].Link}>{Display.CTA["0"].Label}</Button>
                          }
                    
                          if(Display.ReviewShow){
                                return(
                                    <div key={i}  className={DisplayClass +"  ReviewSection"}>
                                        <div className="row">
                                                <div className="col-12">
                                                    <h1>{Display.ReviewHeader} <FontAwesomeIcon  icon={Btn_Icon} className="ReviewIcon" /></h1>
                                                    <img src={Display.Poster} alt="" /> 
                                                    <p>{Display.ReviewCopy}</p>
                                                    {CTA}
                                                </div>   
                                            </div>
                                    </div>
                                )
                            }
                })
            }
        </div>
      )
  }
}
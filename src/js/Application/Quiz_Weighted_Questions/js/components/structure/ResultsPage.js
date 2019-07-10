import React, { Component } from 'react';
import ResetButton from '../utils/ResetBtn';
// import PercentageCircle from "../utils/PercentageCircle";
//import ResultReview from "../utils/Result_Review";
//import Dots from "../utils/ScoreBoardDots";
import Grow from '@material-ui/core/Grow';
import SocialButton from "../../../../../components/Social/SocialContainer";


let Display=null
export default  class ResultsPage extends Component {

    state = {  checked: false };

      Calculate(results){ 
          let num=0, int=false
        // eslint-disable-next-line   
        results.map((perc,i)=>{
          
            if(parseInt(perc.Percent,10) > num)
                { 
                    num = parseInt(perc.Percent,10); 
                    int = i;
                }
        })
      return int;
     }

    componentWillMount(){
        
    }

    componentDidMount(){
        this.setState({ checked: true, })
    } 

  render() { 
      // srcset={result.Image +','+result.ImageLarge}
    Display = this.Calculate(this.props.QuizState.QUIZRESULTS);
    return(
        <Grow in={this.state.checked}>
      <div id="ResultPage" className="container">
            
            <div className=" ResetQuiz">
                <div className="col-12">
                    <ResetButton  />
                </div>
            </div>

            <div className="Result_Ints">
               
                {
                    this.props.QuizState.QUIZRESULTS.map((result,i)=>{
                           //console.log(Display, result);
                           
                            let Selected="NotMe"
                          if(parseFloat(Display) === i){ Selected="Me" }
                            return(
                                <section key={i} className={"PercentageCircleContainer row " + Selected}>
                                    <div  className={"col-md-6 col-sm-12 "}>
                                        <h1>Result</h1>
                                        <h2>'{result.LabelShort}'</h2>
                                        <p>{result.LongAddition} </p>
                                    
                                    </div>
                                    <div key={i} className={"col-md-6 col-sm-12 MeterImage"}>
                                    <img src={result.ImageLarge}   alt="Result Meter" />
                                </div>
                             </section>
                            )
                    })

                }
                
            </div>   

            <div className="row Quiz_Summary">
                <h1>
                    {this.props.QuizState.QUIZRESULTS[Display].LabelShort}
                    {this.props.QuizState.QUIZRESULTS[Display].LongAddition}
                </h1>
                <p>{this.props.QuizState.QUIZRESULTS[Display].Description}</p>
            </div>

        <SocialButton Copy="Share this Quiz" {... this.props}/>
                
      </div>
      </Grow>
    )
  }
}
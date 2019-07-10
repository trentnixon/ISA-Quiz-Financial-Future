import React from 'react';
import QuestionWrapper from '../structure/QuestionWrapper';
//import RevealAnswer from "../structure/QuestionAnswered";
import Button from '@material-ui/core/Button';
import {Animated} from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faQuestionCircle, faCheckCircle  } from '@fortawesome/free-solid-svg-icons'
import {GA} from "../../../../../../actions/ga";
import { QuestionAnswered } from '../../../actions/actions';

var _ = require('lodash');

let delay =0, DisplayClass, Btn_Icon = faQuestionCircle;

let Answers ;
export default class DisplayAnswers extends React.Component {
  state = {
      value: '', 
      state:null, 
      answered:false,
      isVisible:true,
      Changeclass:false,
      index:null
  }; 
 
  handleChange = (event, value) => { 
   
     // this.setState({ isVisible:true,  Changeclass:true});
          
        this.setState({ 
            value:value,
            state:event,
            answered:true,
            isVisible:true,
            Changeclass:true,
            //index:Index
          });

          let QuestionNum = this.props.num+1;
          //console.log(value, "Question_"+QuestionNum);
        
          GA('Question Answered', "Question_"+QuestionNum, value)

        QuestionAnswered(value, this.props.num, 0) 

  }; 

  shuffle(sourceArray) {
  
    let Length = Object.keys(sourceArray).length
    let arr=[]
    for (let i = 1; i <= Length ; i++) { arr.push(i)}
    arr = _.shuffle(arr)
   
    return arr;
}

  componentWillMount(){} 
  shouldComponentUpdate(){return true;}
  componentDidUpdate(prevProps, prevState){} 

  render() {
    delay = 0;
    Answers = this.props.Question.Answers;
    return (

      <QuestionWrapper {... this.props} {... this.state} >

          {
           Object.keys(Answers).map((question,i)=>{ 
              
           //console.log(question);
              delay = delay+150;       
              Btn_Icon=null     
              if(this.state.Changeclass){
                  if(this.state.value === question){
                    DisplayClass='btn_Answer Correct';
                    Btn_Icon = <FontAwesomeIcon  icon={faCheckCircle} className="QuestionIcon" /> ;
                  }
                  else{
                    DisplayClass='btn_Answer InCorrect';
                   // Btn_Icon = faMeh;
                  } 
              }
              else{
                    DisplayClass='btn_Answer'; 
                 //   Btn_Icon = faQuestionCircle
                }

                return(
                  <Animated key={i} animationIn="" animationInDelay={delay} animationOutDelay={delay+500} animationOut="" isVisible={this.state.isVisible}>
                    <Button 
                      variant="outlined"
                      key={i}
                      style={{textAlign: 'left'}}
                      className={DisplayClass}
                      onClick={()=>{ this.handleChange(Answers[question], question) } }
                    >
                          {Answers[question]} 
                          {Btn_Icon}
                    </Button>
                  </Animated >
                )
            })
          }
      </QuestionWrapper>
    )
  }
}
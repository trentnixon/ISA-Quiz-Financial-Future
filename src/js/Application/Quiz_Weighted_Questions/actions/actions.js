import store from "../../../../store/store";
import {GA} from "../../../../actions/ga"

/** Base Functions */

var _ = require('lodash');

function calc(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    return [a, b];
}


/* A Question has been Answered */  
export function QuestionAnswered(value,id,num){  
     
    let QuizState = store.getState().QUIZSTATE; 
    let StoredState = QuizState.QUIZSTATE

    let NextActive = id+1; 
    StoredState[id].answered=true;
    StoredState[id].value=value;
    // StoredState[id].num=num;

    // Store the Updted Quiz State
    store.dispatch({ type:"QUIZ_STATE", payload:StoredState });
    // Store the new Current Quiz Position
    store.dispatch({ type:"NEXT_ACTIVE", payload:NextActive });

    let completed=true;
    // really simple loop! Check to see if all questions have been answered.
    // If so then complete the question,and send to results page
    // eslint-disable-next-line
    StoredState.map((progress,i)=>{ if(progress.answered === false) {completed = false}})

    // If Completed, Send to user to the Results Page
    if(completed === true){ 
        setTimeout(function(){ store.dispatch({ type:"QUIZ_COMPLETED", payload:true }); },2000) 
    }
}

/** Formulate Percentages  **/


export function Formulate(GaugeMeter, QUIZSTATE){

   //console.log(GaugeMeter, QUIZSTATE);
    
    let Store=[], Returned, Answered=0;

// eslint-disable-next-line 
    GaugeMeter.map((count,i)=>{
        GaugeMeter[i].Count = 0;
    })
    // Store the Answered list
    // eslint-disable-next-line
    QUIZSTATE.map((perc,i)=>{
        if(perc.value && perc.answered === true){ 
                Store.push(perc.value);
                Answered=Answered+1
    }})

     // Fetch occurances of outcomes
     Returned = calc(Store);
     // Loop and save occurances to object
     // eslint-disable-next-line 
    Returned[0].map((outcome,i)=>{
        
        //console.log(outcome, i, Returned[1][i])
          let Key = _.findKey(GaugeMeter, { 'Outcome': outcome });
          //console.log(Key);
          GaugeMeter[Key].Count = Returned[1][i];
      })
// eslint-disable-next-line 
    GaugeMeter.map((count,i)=>{
        //console.log(count.Percent, count.Count/Answered*100)
        count.Percent = (count.Count/Answered*100).toFixed(0);
    })
    return GaugeMeter;
}



/** Set up Quiz State */

export function SetUpQuizState(){

    this.State=[];
    this.QuestionsMeta=false;
    this.QuestionsAnswers=false;
    this.QuizResults=false;

    this.Start = function(){
    
        if(this.QuestionsMeta !== false){

                    // eslint-disable-next-line   
                    this.QuestionsMeta.map((q,i)=>{

                        // Delete Question Label
                        delete this.QuestionsAnswers[i]["Question"];
                       
                        /**
                         * 
                         * Find a way to randomize these answers!!!
                         */
                        let Answers = this.QuestionsAnswers[i]
                        Answers = Object.keys(Answers)
                            .map((key) => ({key, value: Answers[key]}))
                            .sort((a, b) => b.key.localeCompare(a.key))
                            .reduce((acc, e) => {
                            acc[e.key] = e.value;
                            return acc;
                            }, {});
                        // End Randomise

            
                        this.QuestionsMeta[i]["answered"]=false;
                        this.QuestionsMeta[i]["value"]=null;
                        this.QuestionsMeta[i]["Answers"]=this.QuestionsAnswers[i];


                    })
                    
                    store.dispatch({ type:"QUIZ_QUESTIONS", payload:this.QuestionsMeta.length });
                    store.dispatch({ type:"QUIZ_STATE", payload:this.QuestionsMeta });
                    store.dispatch({ type:"QUIZ_RESULTS", payload:this.QuizResults});
                    
        }
    }
}

// This needs to be cleaned up
export function ResetQuiz(){

        //console.log("RESET ME");
        let QuizState = store.getState().QUIZSTATE.QUIZSTATE; 
        //let State=[];
        
        GA('Link Clicked', 'Quiz Reset', "Quiz has been reset")
        
        // eslint-disable-next-line
        QuizState.map((q,i)=>{
           
            QuizState[i]["answered"]=false;
            QuizState[i]["value"]=null;
         
        })
       
        store.dispatch({ type:"QUIZ_STATE", payload:QuizState });
        store.dispatch({ type:"NEXT_ACTIVE", payload:0 });
        store.dispatch({ type:"PUSHTONEXT", payload:true });
        store.dispatch({ type:"QUIZ_COMPLETED", payload:false });

        setTimeout(function(){ store.dispatch({ type:"PUSHTONEXT", payload:false }); },100);

}
// import React from "react";

const InitialState ={
	APPLICATION:false,
	QUIZSTATE:false,
	QUIZRESULTS:false,
	num:null,
	CurrentQuestion:0, 
	PushToNext:false,
	Completed:false,
	StoredPercentages:false
}

const APP = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			
			case "STORE_APPLICATION":{
			return {...state, APPLICATION:action.payload}
				// eslint-disable-next-line 
				break
			} 
			case "QUIZ_QUESTIONS":{ 
				return {...state, num:action.payload}
					// eslint-disable-next-line 
				break
				}
			case "QUIZ_STATE":{
				return {...state, QUIZSTATE:action.payload}
					// eslint-disable-next-line 
				break
			}
			case "QUIZ_RESULTS":{
				return {...state, QUIZRESULTS:action.payload}
					// eslint-disable-next-line 
				break
			}
			case "NEXT_ACTIVE":{
			
				return {...state, CurrentQuestion:action.payload}
					// eslint-disable-next-line 
				break
			}
			case "PUSHTONEXT":{
				return {...state, PushToNext:action.payload}
					// eslint-disable-next-line 
				break
			}
			case "RESETUI":{
				return {...state, Reset:action.payload}
					// eslint-disable-next-line 
				break
			}
			case "QUIZ_COMPLETED":{
				return {...state, Completed:action.payload}
					// eslint-disable-next-line 
				break
			}
			case "STORE_PERCENTAGES":{
				return {...state, StoredPercentages:action.payload}
					// eslint-disable-next-line 
				break
			}
			
		}
		return state;
	}
export default APP;	
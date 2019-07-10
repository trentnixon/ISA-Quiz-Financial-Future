// import React from "react";

const InitialState ={
	Data:false,
	Header:false,
	BodyCopy:false,
	PartnerZone:false,
	Client:false,
	UI:false, 
	UI_SET:false,
	ImagePath:null,
}

const UI = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
			// Fetch Initial Meta Data
			case "STORE_DATA":{
				return {...state, Data:action.payload}
				// eslint-disable-next-line 
				break
			}	
			case "STORE_UI":{
			return {...state, UI:action.payload}
				// eslint-disable-next-line 
				break
			}

			case "STORE_HEADER":{
				return {...state, Header:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "STORE_BODYCOPY":{
					return {...state, BodyCopy:action.payload}
						// eslint-disable-next-line 
						break
			}
			case "STORE_CLIENT":{
				return {...state, Client:action.payload}
					// eslint-disable-next-line 
					break
		}
			case "STORE_PARTNERZONE":{
				return {...state, PartnerZone:action.payload}
					// eslint-disable-next-line 
					break
		}
					
			
			case "UI_SET":{
			return {...state, UI_SET:action.payload}
				// eslint-disable-next-line 
				break
			}
		}
		return state;
	}
export default UI;	
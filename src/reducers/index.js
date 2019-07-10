import { combineReducers } from "redux";

import UI_DATA from "./UI";
import APP from "./Application";
import QUIZSTATE from "../js/Application/Quiz_Weighted_Questions/reducers/Application";

const reducers = combineReducers({
		UI:UI_DATA,
		APP:APP,
		QUIZSTATE:QUIZSTATE
	})

export default reducers;
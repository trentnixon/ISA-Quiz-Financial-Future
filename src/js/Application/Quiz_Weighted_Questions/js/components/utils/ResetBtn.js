import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import {ResetQuiz} from "../../../actions/actions";

export default  class ResetButton extends Component {
componentWillMount(){}
  render() {
    return(
        <div className="container">
              <div className="row">
                  <div className="col-12">
                  <Button 
                      variant="contained" 
                      className="ResetButton"
                      onClick={()=>{ ResetQuiz() } }
                    >
                         Re Take the Quiz
                    </Button>
                  </div>
              </div>
        </div>
      )
  }
}
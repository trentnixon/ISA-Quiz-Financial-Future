import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export default  class ResetButton extends Component {
componentWillMount(){}
  render() {
    return(
        <div>
            <CircularProgress  
                variant="static" 
                value={this.props.percentage} 
                size={100}
                thickness={1.5}
                className="PercentageCircle"
            />
        </div>
      )
  }
}
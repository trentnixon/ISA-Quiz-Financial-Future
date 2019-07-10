import React, { Component } from 'react';
import ResultPage from "./ResultsPage";
import CircularProgress from '@material-ui/core/CircularProgress';

export default  class ResultsPage extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            checked: false,
            term:"Calculating Results"
          };
      }
    componentWillMount(){
     
        

        setTimeout(function(){
            this.setState({
                checked: true
              })
          }.bind(this),2000)
    }

    componentDidMount(){
        let elmnt = document.getElementById("ResultWrapper");
        elmnt.scrollIntoView(true);
    }
  render() {
     
    if(this.state.checked === false){
        return(
            <div id="ResultPage" className="container">
                <div className="crunchingtheNumbers">
                    <CircularProgress 
                        size={70}
                        style={{ color: '#000' }}
                        thickness={5}
                    />
                    <h1>{this.state.term}</h1>
                </div>
                 
            </div>
          )
    }
    else if(this.state.checked === true){
        return(
            <div id="ResultPage" className="container">
                  <ResultPage 
                    {... this.props} 
                />
            </div>
          )
    }
  }
}
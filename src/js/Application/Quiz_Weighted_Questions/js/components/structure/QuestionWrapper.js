import React from 'react';

export default class QuestionWrapper extends React.Component {
  render() {
    return (
      <div  id="Question" className="row"  >
        
        <div className="col-lg-12 col-sm-12 Label" style={{backgroundImage: "url(" +  this.props.Question.Image + ")"}}>
             <img src={this.props.Question.Image} alt="Question" />
      </div>
          <div className="col-lg-12 col-sm-12 Answers">
              <h1>{this.props.Question.Question}</h1>
              {this.props.children}
          </div>
          
      </div>
    );
  }
} 
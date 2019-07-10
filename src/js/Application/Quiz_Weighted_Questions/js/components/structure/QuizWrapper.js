import React, { Component } from 'react';

export default  class QuizWrapper extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
}

componentDidMount() {
  //this.myRef.current.scrollTo(0, 0);
  //console.log("Scroll")
}
  
  render() {
    

    return(
      <div className="container" id="QuizWrapper"  ref={this.myRef} >
            <div className="row">
                <div className="col-12">
                    {this.props.children}
                </div>
            </div>
      </div>
    )
  }
}
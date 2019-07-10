import React from 'react';

let Paragrph=null;
export default class Paragraphs extends React.Component {

  componentWillMount(){ }

  render() {

    Paragrph=null;
 
    if(typeof(this.props.p) === 'object'){
     Paragrph = this.props.p.map((para,i)=>{
            return( <p key={i} dangerouslySetInnerHTML={ { __html: para} }></p>)
      }) 
    }else{  Paragrph = <p dangerouslySetInnerHTML={ { __html: this.props.p} }></p>  }
   
    return(
        <div> {Paragrph} </div>
    )
  }
}

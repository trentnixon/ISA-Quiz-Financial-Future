import React, { Component } from 'react';

export default  class Default extends Component {
  componentWillMount(){}

  CreateCopyType(data,i){
    //console.log(data)
          switch(data.Type) {
              case 'p':
                 return <p key={i} className={data.Class}>{data.Copy}</p>
                 // eslint-disable-next-line
              break;
              
              case 'h1':
                  return <h1 key={i} className={data.Class}>{data.Copy}</h1>
              // eslint-disable-next-line
              break;
              
              case 'h2':
                return <h2 key={i} className={data.Class}>{data.Copy}</h2>
              // eslint-disable-next-line
              break;
              
              case 'h3':
                  return <h3 key={i} className={data.Class}>{data.Copy}</h3>
              // eslint-disable-next-line
              break;

              default:
                  return <p key={i} className={data.Class}>{data.Copy}</p>
            }
  }

  render() {
    let App = this.props.App;
    let  Copy = App.map((copy,i)=>{ 
      if(copy.Position === this.props.Position) return ( this.CreateCopyType(copy,i))} )


    return(
      <div className="container">
        <div className="row BodyCopy">
                { Copy  }
        </div>
      </div>
    )
  }
}
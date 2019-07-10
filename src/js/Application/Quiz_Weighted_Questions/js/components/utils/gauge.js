import React from 'react';
import { Formulate } from  "../../../actions/actions";

let Baseperc = 0, Display=[], GaugeMeter;

export default class Gauge extends React.Component {

  render() {
    
    GaugeMeter = this.props.QuizState.QUIZRESULTS;
    Display = Formulate(GaugeMeter, this.props.QuizState.QUIZSTATE);
    return (
      <div  id="Gauge"  >
            <ul className="DisplayGauge">
                {
                    GaugeMeter.map((item,i)=>{   
                    Baseperc=Display[i].Percent
                    
                        if(isNaN(Baseperc)){Baseperc= parseInt(100/GaugeMeter.length,10)}
                            return(
                                <li key={i} className={`perc_${Baseperc}`} style={{width:Baseperc+"%"}}>
                                    <p>{item.LabelShort} <span className="perc">{Baseperc}%</span></p>
                                </li>
                            )
                    })
                }
            </ul>
      </div>
    );
  }
}
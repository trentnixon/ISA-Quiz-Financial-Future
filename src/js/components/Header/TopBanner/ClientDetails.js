import React, { Component } from 'react';
import {GA} from "../../../../actions/ga";
export default class ClientDetails extends Component { 
  render() {
    let Client = this.props.Client;
    return ( 
      <div className="col-xs-12 col-sm-6 text-right">   
          <a 
            href={Client.CTA}
            target="_blank"  
            rel="noopener noreferrer"
            data-category="Link Clicked"
            onClick={ () => {GA('Link Clicked', 'Header - Client Logo', Client.CTA)}}
          >
              <img src={Client.Logo} alt={Client.Client} />
          </a>
        <span>{Client.Lead}</span> 
    </div>
    );
  } 
}
import React, { Component } from 'react';

import PartnerZone from "./TopBanner/PartnerZone";
import ClientDetails from "./TopBanner/ClientDetails";


export default class TopBanner extends Component { 
  render() {
    return ( 
        <div className="container-fluid DarkBar" id="TopBanner">  
            <div className="container">
                <div className="row" id="Sponsor">
                    <PartnerZone  PartnerZone={this.props.PartnerZone}/>
                    <ClientDetails Client={this.props.Client} />
                </div>
            </div>  
        </div>
    );
  } 
} 
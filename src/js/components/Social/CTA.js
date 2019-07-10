import React, { Component } from 'react';
import {GA} from "../../../actions/ga";
export default class FooterCTA extends Component {
  render() {
      let Path = this.props.PartnerZone;
    return ( 
            <a 
            href={Path.PartnerZoneURL}
                className="ReadMore"
                onClick={()=>{GA('Link Clicked','Footer - PartnerZone',Path.PartnerZoneURL)} }
            >
                {Path.PartnerZoneFooter}<br /> <strong>{Path.PartnerZoneLabel}</strong> 
            </a>
        );
    } 
} 
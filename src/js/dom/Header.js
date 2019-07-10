import React from 'react';

import TopBanner from "../components/Header/TopBanner";
import HeaderTitles from "../components/Header/HeaderTitles";

export default class Header extends React.Component {
  render() {
        let Header = this.props.Header; 

    return(
        <div className="row" id="Header"  style={ { backgroundImage: `url(${Header.HeaderImage})` } }>
            <TopBanner Client={this.props.Client} PartnerZone={this.props.PartnerZone}  />
            <HeaderTitles Header={Header.Header} SubHeader={Header.SubHeader}/>          
        </div> 
    )
  }
}
 
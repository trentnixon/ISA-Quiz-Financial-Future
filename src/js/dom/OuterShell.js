import React, { Component } from 'react';
// Import Layout Components
import Header from "./Header";
import BodyCopy from "./BodyCopy";
//import Footer from "./Footer";
import SocialBar from "./CTA_SocialShare_Bar";

// Application
//import Facewall from "../Application/Facewall";

// Use this component to build up the Project Layout
export default class OuterShell extends Component {
  render() {

   //console.log(this.props.UI)
    
    /**
     * 
            <Footer     {... this.props} /> 
     */
    return ( 
        <div>
            <Header    
                Header={this.props.UI.Header} 
                Client={this.props.UI.Client} 
                PartnerZone={this.props.UI.PartnerZone} 
            />
            
              <BodyCopy    
                BodyCopy={this.props.UI.BodyCopy}
                Position="Top"
              />

                  {this.props.children} 

              <BodyCopy    
                BodyCopy={this.props.UI.BodyCopy}
                Position="Bottom"
              />


            <SocialBar  
              {... this.props} 
              PartnerZone={this.props.UI.PartnerZone} 
            />
  
        </div>
        ) 
  }
}

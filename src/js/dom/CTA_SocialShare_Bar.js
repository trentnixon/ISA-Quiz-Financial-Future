import React, { Component } from 'react';
import CTA from "../components/Social/CTA";
import ShareOptions from "../components/Social/SocialContainer";

export default class TealNavBarBottom extends Component {
  render() {
    return ( 
            <div id="ShareBar" >
                <div className="container">
                    <div className="row" >
                        <div className="col-sm-12 col-md-4 text-left">
                            <ShareOptions Copy="Share" {... this.props} />
                        </div>
                        <div className="col-sm-12 col-md-8 text-right">
                            <CTA 
                                {... this.props}
                                PartnerZone={this.props.PartnerZone}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
} 
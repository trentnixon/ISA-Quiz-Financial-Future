import React from 'react';
import {GA} from "../../../actions/ga";
import {
    FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon
  } from 'react-share';

let shareUrl="https://www.google.com",title="This is a Social Test"


// COMPOENNT REQURES UPDATING
// MOVE BUTTONS TO INDIVIDUAL COMPONENTS
export default class SocialIcons extends React.Component {


  componentWillMount(){ }

  render() {
   
    return(
        <div className="col-6 text-left " id="socialIcons">
        
                <div className="icon">
                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                    onClick={()=>{ GA('Social Media Button Clicked','Facebook',shareUrl)} }
                >
                    <FacebookIcon
                        size={25}
                        round 
                    />
                </FacebookShareButton>
                </div>

                <div className="icon">
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    onClick={()=>{ GA('Social Media Button Clicked','Twitter',shareUrl)} }
                    className="Demo__some-network__share-button">
                    <TwitterIcon
                    size={25}
                    round />
                </TwitterShareButton>
                </div>

        </div>
      )
  }
}

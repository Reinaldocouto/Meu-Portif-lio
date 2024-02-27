import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href='https://api.whatsapp.com/send?phone=5511995384270' target='_blank'><i></i> W.App>
            </a>
            <a href="https://www.linkedin.com/in/reinaldocouto/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/Reinaldocouto">
                <GitHubIcon/>
            </a>
           
        </div>
    )
}

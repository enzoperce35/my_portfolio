import {default as github} from '../../assets/links/github.svg';
import {default as linkedin} from '../../assets/links/linkedin.svg';

export default function Footer() {

  return (
    <div id="footer">
      <div id="contacts">
        <div>
          <p id="note">Contact Me</p>
          <p>Please contact me if you think our work could be mutually beneficial.</p>
        </div>
        
        <div>
          <p>+639672966214</p>
          <p>edgarlorenzcastro@gmail.com</p>
        </div>
      
        <div id="profile-links">
          <img src={github} alt="github" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>

      <div id="prof-pic"></div>
    </div>
  )
}

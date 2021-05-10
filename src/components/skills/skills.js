import './skills.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";


function Skills() {
  return (
    <div className="skills">
      <div>
        <h1 id="skillshead">Skills</h1>
      </div>

      

        <div className="skillsbar">
          <div><i className="html5"><FaHtml5 /> </i></div>
          <div class="bar front expert" data-skill="HTML5"></div>
        </div>
        <div className="skillsbar">
          <i className="css3"><FaCss3Alt /></i>
          <div class="bar front advanced" data-skill="CSS3"></div>
        </div>
        <div className="skillsbar">
          <i className="js"><SiJavascript /></i>
          <div class="bar front basic" data-skill="Javascript"></div>
        </div>
        <div className="skillsbar">
          <i className="react"><SiReact /></i>
          <div class="bar front learning" data-skill="React"></div>
        </div>

    


      </div>




  
  );
}

export default Skills;

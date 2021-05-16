import "./header.css";
import { BiWinkSmile } from 'react-icons/bi';



function Header() {
  return (


    <div className="container_header">
      <div><img src="" alt=""/></div>
      <div className="text">
        <h1 id="hello">Hello <span className="exclamation">!</span></h1>
        <h2 className="fatihce">I'm <span className="header_fatih">Fatih</span> <span className="header_punkt">.</span></h2>
        <h2 className="stack">I'm a full-stack web developer <br /> candidate  <span className="smileicon"><BiWinkSmile /></span></h2>

      </div>
    </div>
  );
}

export default Header;
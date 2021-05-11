import "./header.css";
import { BiWinkSmile } from 'react-icons/bi';



function Header() {
  return (


    <div className="container_header">
      <div><img src="" alt=""/></div>
      <div className="text">
        <h1 id="hello">Hello!</h1>
        <h2 className="fatihce">I'm Fatih</h2>
        <h2 className="stack">I'm a full-stack web developer candidate  <span classNameg="smileicon"><BiWinkSmile /></span></h2>

      </div>
    </div>
  );
}

export default Header;
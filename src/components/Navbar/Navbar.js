import "../Navbar/Navbar.css"


function Navbar() {
  return (
   
     
        <nav className="navbar">
         
            <li>
            <a href="#hello"><button class="glow-on-hover" type="button">Fatih</button></a> 
            </li>
            <li>
            <a href="#abouthead"><button class="glow-on-hover" type="button">About</button></a> 
            </li>
            <li>
           <a href="#skillshead"><button class="glow-on-hover" type="button">Skills</button></a> 
            </li>
            <li>
            <a href="#projecthead"><button class="glow-on-hover" type="button">Projects</button></a> 
            </li>
            <li>
            <a href="#contacthead"><button class="glow-on-hover" type="button">Contact</button></a> 
            </li>
         
        </nav>

  );
}

export default Navbar;

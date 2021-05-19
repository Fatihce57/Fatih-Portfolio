import "./navbar.css";


function Navbar() {
  return (
   
     
        <nav className="container-navbar">
 
        {/* <div>
        <img className="logo" src="./images/logo.png" alt="" />
        </div> */}

         <div class="collapse" id="navbarToggleExternalContent">
  <div class="p-4">
    
    <nav class="text-white h4">
    <li>
            <a href="#hello"><button class="glow-on-hover" type="button">Home</button></a> 
            </li>
            <li>
            <a href="#abouthead"><button class="glow-on-hover" type="button">About</button></a> 
            </li>
            <li>
            <a href="#projecthead"><button class="glow-on-hover" type="button">Projects</button></a> 
            </li>
            <li>
           <a href="#skillshead"><button class="glow-on-hover" type="button">Skills</button></a> 
            </li>
            <li>
            <a href="#contacthead"><button class="glow-on-hover" type="button">Contact</button></a> 
            </li>

    </nav>
   
  </div>
</div>
<nav class="navbar navbar-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav> 





        </nav>




  );
}

export default Navbar;

import './App.css';
/* import { BrowserRouter, Route, Link } from "react-router-dom"; */
import Particles from "react-particles-js";
import Navbar from './components/navbar/navbar.js';
import Header from './components/header/header';
import Project from './components/project/project';
import Skills from './components/skills/skills';
import About from './components/about/about';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">  
<Particles

className="particles-canvas"

    params={{
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 789.1476416322727
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "star",
          "stroke": {
            "width": 2,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5208374434773,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4.008530152163807,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 34.107242916656496,
            "size_min": 4.060386061506725,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 176.3753266952075,
          "color": "#ffffff",
          "opacity": 0,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    
	}} />

<Navbar /> 
<Header />
<About />
<Project />
<Skills />
<Footer />


    </div>

  );
}









export default App;

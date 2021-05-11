import './project.css';

function Project() {
  return (
    <div className="project">
     <h2 id="projecthead">Project</h2>

<div className="container-project">

     <div className="project-1">
       <h2>Perseverance Rover</h2>
<iframe className="perseverance" src="https://marsperseverance.netlify.app/" frameborder="0"></iframe>
</div>
    
    <div className="project-2">
      <h2>Analog Clock</h2>
      <iframe className="clock" src="https://analoguhr.netlify.app/" frameborder="0"></iframe>
    </div>
    
    <div className="project-3">
<h2>Movies</h2>
<iframe className="movies" src="https://filmmovies.netlify.app/" frameborder="0"></iframe>
    </div>
     
    
    </div>
    
    </div>
  );
}

export default Project;
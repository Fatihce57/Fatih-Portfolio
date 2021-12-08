import './Projects.scss'
import { Card, Button } from 'react-bootstrap'
import data from './data.json'

function Project() {
  return (
    <div className="project">
      <div className="Menu">
        {data.map((item) => {
          return (
            <div key={item.id} className="card">
              <h2 className="card-title">{item.name}</h2>
              <img className="card-image" src={item.image} alt="menu_image" />
              <div className="card-desc">
                <p className="mt-4"> <h5 className="technologies">Information:</h5>
                  {item.overview}</p>
                <p className="mt-4"> <h5 className="technologies">Technologies:</h5> {item.technologies}</p>
                <div className="button-area">
                  <Button className="button left">
                    <Card.Link
                      className="card-link"
                      href={item.github}
                      target="_blank"
                    >
                      GitHub
                    </Card.Link>
                  </Button>
                  <Button className="button right">
                    <Card.Link
                      className="card-link "
                      href={item.url}
                      target="_blank"
                    >
                      Live
                    </Card.Link>
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Project

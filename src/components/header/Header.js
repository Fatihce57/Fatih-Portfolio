import './Header.scss'
import { BiWinkSmile } from 'react-icons/bi'
import { Col } from 'react-bootstrap'
import { IoChatbubbleEllipses } from 'react-icons/io5'

function Header() {
  return (
    <div className="container_header">
      
        <Col xs={10} sm={10} md={10} xl={10}>
          <div className="speed" id="linear">
            <h1 id="hello">
              Hello <span className="exclamation">!</span>
            </h1>
          </div>
          <div className="speed" id="ease">
            <h2 className="fatihce">
              I'm <span className="header_fatih">Fatih</span>
              <span className="header_punkt">
                <IoChatbubbleEllipses />
              </span>
            </h2>
          </div>
          <div className="speed" id="easeIn">
            <h2 className="stack">
              I'm a full-stack web developer <br /> candidate
              <span className="smileicon">
                <BiWinkSmile />
              </span>
            </h2>
          </div>
        </Col>
   
    </div>
  )
}

export default Header

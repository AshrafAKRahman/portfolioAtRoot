import { Nav, Col, Container, Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./PrjoectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/Trading Bot.png"
import projImg2 from "../assets/img/RPS.jpg"
import projImg3 from "../assets/img/API.jpg"
import projImg4 from  "../assets/img/Testing.jpg"
import projImg5 from "../assets/img/Tables_Database.png"
import projImg6 from "../assets/img/ticketing-system.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';  


export const Projects = () => {

    const projects = [
      {
        title: "Trading Bot",
        description: "Python Logical Programming",
        imgUrl: projImg1,
      },
      {
        title: "Rock, Paper, Scissors",
        description: "JavaScript Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "API's",
        description: "NodeJs Backend Development",
        imgUrl: projImg3,
      },
      {
        title: "Testing",
        description: "Jest, SuperTest, Cypress",
        imgUrl: projImg4,
      },
      {
        title: "Tables & Database",
        description: "PostgreSql",
        imgUrl: projImg5,
      },
      {
        title: "HelpDesk Ticketing System",
        description: "React & Typescript",
        imgUrl: projImg6,
      },
    ]
    
    return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>"I am delighted to present to you my portfolio of projects, accessible through the 'Tab 1' link. You will also find a link to the Github repository under 'Tab 2' and 'Tab 3' is a special tribute to the individuals who have been instrumental in my professional development, including my collaborators, mentor, and coaches. I am grateful for the opportunity to showcase my work and thank you for taking the time to review them."</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        {/* <img className="background-image-right" src={colorSharp2} alt="background"></img> */}
      </section>
    )
  }
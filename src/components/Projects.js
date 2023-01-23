import { Nav, Col, Container, Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./PrjoectCard";
import projImg1 from "../assets/img/RPS.jpg";
import projImg2 from "../assets/img/projImg2.jpg";
import projImg3 from "../assets/img/API.jpg";
import projImg4 from "../assets/img/Testing.jpg";
import projImg5 from "../assets/img/Tables_Database.png";
import projImg6 from "../assets/img/ticketing-system.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Rock, Paper, Scissors",
      description: "JavaScript Design & Development",
      imgUrl: projImg1,
      link: "https://rock-paper-scissors-nrg6.onrender.com",
    },
    {
      title: "Dictionary",
      description: "JavaScript 3rd Party API Fetch",
      imgUrl: projImg2,
      link: "https://dictionary-tfpc.onrender.com",
    },
    {
      title: "News App",
      description: "React 3rd Party API Fetch ",
      imgUrl: projImg3,
    },
    {
      title: "Weather App",
      description: "Typescript",
      imgUrl: projImg4,
    },
    {
      title: "Ticketing HelpDesk",
      description: "React RESTful API & Testing",
      imgUrl: projImg5,
    },
    {
      title: "LifeCare App",
      description: "Full stack solution to real world problem",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    "I am delighted to present to you my portfolio of projects,
                    accessible through the 'Tab 1' link. You will also find a
                    link to the Github repository under 'Tab 2' and 'Tab 3' is a
                    special tribute to the individuals who have been
                    instrumental in my professional development, including my
                    collaborators, mentor, and coaches. I am grateful for the
                    opportunity to showcase my work and thank you for taking the
                    time to review them."
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="background"></img> */}
    </section>
  );
};

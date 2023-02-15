import { Nav, Col, Container, Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./PrjoectCard";
import projImg1 from "../assets/img/RPS.jpg";
import projImg2 from "../assets/img/projImg2.jpg";
import projImg3 from "../assets/img/API.jpg";
import projImg4 from "../assets/img/Tables_Database.png";
import projImg5 from "../assets/img/ticketing-system.png";
import projImg6 from "../assets/img/lifeCare.png";
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
      title: "Weather App",
      description: "Typescript 3rd Party API Fetch ",
      imgUrl: projImg3,
      link: "https://weather-app-s7dj.onrender.com/",
    },
    {
      title: "Bookmarks & Todo App",
      description:
        "React Personal Project using Chakra UI with Local Storage and UUID",
      imgUrl: projImg4,
      link: "https://bookmarks-and-todo-mvp.onrender.com",
    },
    {
      title: "Ticketing HelpDesk",
      description: "React RESTful API & Testing",
      imgUrl: projImg5,
      link: "https://frontend-ticketing.onrender.com/",
    },
    {
      title: "LifeCare App",
      description: "Full stack solution to real world problem",
      imgUrl: projImg6,
    },
  ];
  const projectsTwo = [
    {
      title: "Rock, Paper, Scissors",
      description: "JavaScript Design & Development",
      imgUrl: projImg1,
      link: "https://github.com/AshrafAKRahman/RPS",
    },
    {
      title: "Dictionary",
      description: "JavaScript 3rd Party API Fetch",
      imgUrl: projImg2,
      link: "https://github.com/AshrafAKRahman/Dictionary_APIFetchRequest",
    },
    {
      title: "Weather App",
      description: "Typescript 3rd Party API Fetch ",
      imgUrl: projImg3,
      link: "https://github.com/AshrafAKRahman/weaher-app",
    },
    {
      title: "Bookmarks & Todo App",
      description:
        "React Personal Project using Chakra UI with Local Storage and UUID",
      imgUrl: projImg4,
      link: "https://github.com/AshrafAKRahman/bookmarks-todo-chakra",
    },
    {
      title: "Ticketing HelpDesk",
      description: "React RESTful API & Testing",
      imgUrl: projImg5,
      link: "https://github.com/AshrafAKRahman/Ticketing-system",
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
                    accessible through through the below links. You will also
                    find a link to the Github repository and a special tribute
                    to the individuals who have been instrumental in my
                    professional development, including my collaborators,
                    mentor, and coaches. I am grateful for the opportunity to
                    showcase my work and thank you for taking the time to review
                    them."
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Deployed Site</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">GitHub Repo Link</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Thank You</Nav.Link>
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
                          {projectsTwo.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Thank you to the entire team at School of Code for
                          providing me with the opportunity to develop both my
                          soft and technical skills. I would like to especially
                          thank:
                        </p>
                        <ul id="team">
                          <li>Chris Meah (Founder & CEO)</li>
                          <li>Liz Kaufman (Lead Coach)</li>
                          <li>Kazeem (DevOps Engineer)</li>
                          <li>Hamza Ibrahim (Software Coach)</li>
                          <li>Arshi Sheikh (Software Developer)</li>
                          <li>Victoria Meah (Enablement Coach)</li>
                          <li>
                            Kamran Iqbal (Squad Lead & Software Engineer at
                            BJSS)
                          </li>
                        </ul>
                        <p>
                          {" "}
                          for their guidance and support. Their expertise and
                          dedication have been instrumental in my growth as a
                          software developer.
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

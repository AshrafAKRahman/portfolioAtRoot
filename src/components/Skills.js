import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from "../assets/img/JS.png";
import reactLogo from "../assets/img/React.png";
import nodejs from "../assets/img/node-js.png";
import Postgresql from "../assets/img/Postgresql.png";
import jestTest from "../assets/img/jestTest.png";
import cypress from "../assets/img/cypress.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className="black-header"> Technological Skills </h2>
              <p>
                Below is a brief overview of the technologies i am most
                comfortable working with for full stack development. I am
                consistently developing these skills and will adding C#, PHP and
                Vue shortly
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={js} alt="jsLogo" />
                  <h5 className="black-header">JavaScript</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="reactLogo" />
                  <h5 className="black-header">React</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="nodejsLogo" />
                  <h5 className="black-header">NodeJS</h5>
                </div>
                <div className="item">
                  <img src={Postgresql} alt="postgresqlLogo" />
                  <h5 className="black-header">PostgresSql</h5>
                </div>
                <div className="item">
                  <img src={jestTest} alt="jestLogo" />
                  <h5 className="black-header">Jest Testing</h5>
                </div>
                <div className="item">
                  <img src={cypress} alt="cypressLogo" />
                  <h5 className="black-header">cypress Testing</h5>
                </div>
              </Carousel>
              {/* </h2> */}
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt="background"/> */}
    </section>
  );
};

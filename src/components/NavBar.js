import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const isMobile = window.innerWidth <= 768; // adjust the width as needed

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={toggleMenu}
      className="navbar-wrapper"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#connect"
              className={
                activeLink === "connect" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("connect")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                id="linkedin-icon"
                href="https://www.linkedin.com/in/ashraf-a-rahman-b7b508120/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/AshrafAKRahman"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon2} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// import { useState, useEffect } from "react";
// import { Nav, Navbar, Container } from "react-bootstrap";
// import logo from "../assets/img/logo.png";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";

// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, seScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         seScrolled(true);
//       } else {
//         seScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="#home">
//           <img src={logo} alt="logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggle-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link
//               href="#home"
//               className={
//                 activeLink === "home" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("home")}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               href="#skills"
//               className={
//                 activeLink === "skills" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("skills")}
//             >
//               Skills
//             </Nav.Link>
//             <Nav.Link
//               href="#project"
//               className={
//                 activeLink === "project" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("projects")}
//             >
//               Projects
//             </Nav.Link>
//             <Nav.Link
//               href="#connect"
//               className={
//                 activeLink === "connect" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("connect")}
//             >
//               Contact
//             </Nav.Link>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a
//                 id="linkedin-icon"
//                 href="https://www.linkedin.com/in/ashraf-a-rahman-b7b508120/"
//                 rel="noreferrer"
//                 target="_blank"
//               >
//                 <img src={navIcon1} alt="" />
//               </a>
//               <a
//                 href="https://github.com/AshrafAKRahman"
//                 rel="noreferrer"
//                 target="_blank"
//               >
//                 <img src={navIcon2} alt="" />
//               </a>
//             </div>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

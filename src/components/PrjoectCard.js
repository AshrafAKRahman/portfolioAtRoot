import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {isVisible ? (
          <a href={link}>
            <img src={imgUrl} alt="ProjectImage" />
          </a>
        ) : (
          <img src={imgUrl} alt="ProjectImage" />
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

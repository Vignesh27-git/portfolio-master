import React from "react";
import { Col, Row } from "react-bootstrap";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Techstack() {
  const techItems = [
    { img: Javascript, name: "JavaScript" },
    { img: ReactIcon, name: "React.js" },
    { img: Redux, name: "Redux" },
    { img: Git, name: "Git" },
    { img: Firebase, name: "Firebase" },
    { img: Tailwind, name: "Tailwind CSS" },
    { img: MUI, name: "Material UI" },
    { img: Postman, name: "Postman" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <img src={tech.img} alt={tech.name} />
          <div className="tech-icons-text">{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
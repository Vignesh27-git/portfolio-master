import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vignesh.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Frontend/Web Developer with hands-on experience building responsive, user-friendly, and visually engaging web applications using HTML, CSS, JavaScript, and React.js. I enjoy combining logic and design—creating clean UI, optimizing performance, and improving user experience. I’ve worked on multiple projects, focusing on reusable components, modern ES6 features, and responsive layouts. I’m always learning and collaborating to deliver smooth, high-quality web experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.Js, Html, Css{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, customizing E-Comerce websites,{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
  <img
    src={myImg}
    className="img-fluid"
    alt="avatar"
    style={{
      width: "250px",
      height: "250px",
      borderRadius: "70%",
      objectFit: "cover"
    }}
  />
</Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

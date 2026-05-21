import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import todolist from "../../Assets/Projects/todolist.png";
import shoping from "../../Assets/Projects/shoping.png";
import suicide from "../../Assets/Projects/suicide.png";
import interviw from "../../Assets/Projects/interviw.png";
import netflix from  "../../Assets/Projects/netflix.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoping}
              isBlog={false}
              title="E-mart"
              description="Developed a user-friendly online shopping platform with responsive design, dynamic product listings, and seamless cart functionality to enhance the overall shopping experience."
              ghLink="https://github.com/Vignesh27-git/E-mart"
              demoLink="https://e-mart-00.netlify.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interviw}
              isBlog={false}
              title="recruitment-web-application"
              description="A responsive recruitment platform with a clean, user-friendly interface for browsing job listings, managing candidates, and streamlining the hiring process. Built with modern frontend practices to ensure smooth performance and intuitive navigation."
              ghLink="https://github.com/Vignesh27-git/-Assignment-/tree/main"
              demoLink="https://recruitmantr.netlify.app/"
            />
          </Col>

                 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="netflix"
              description="This Netflix Clone is a responsive front-end web application built to recreate the Netflix-style user interface with a modern and interactive design. It includes features like a movie-style banner, responsive layout, navigation bar, hover effects, and categorized content sections for a real streaming-platform feel. The project is mainly developed using React.js for component-based UI building, along with JavaScript, HTML, and CSS/Bootstrap for styling and responsiveness. It is deployed online using Netlify, with code management typically handled through GitHub"
              ghLink="https://github.com/Vignesh27-git/Netflix-colne"
              demoLink="https://netflex-cloneeff6.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-do-List"
              description="A simple and responsive To-Do List web application that helps users manage daily tasks efficiently. It allows adding, deleting, and tracking tasks with a clean and user-friendly interface for better productivity."
              ghLink="https://github.com/Vignesh27-git/Do-list-App1"
              demoLink="https://do-list-main.netlify.app/"              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

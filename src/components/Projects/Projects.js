import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import storyGeneratorImage from "../../Assets/Projects/storyGenerator.png"; 
import jarvisImage from "../../Assets/Projects/jarvis.png"
import Particles from "../Particles";

function Projects() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Particles */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Particles />
      </div>

      {/* Foreground Content */}
      <Container fluid className="project-section">
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
                imgPath={storyGeneratorImage} 
                isBlog={false}
                title="AI Story Generator"
                description="Generate creative stories using React + Groq AI (LLaMA 3). Choose categories like Sci‑Fi, Fantasy, Horror, Romance; supports copying and saving generated content."
                ghLink="https://github.com/Nsanjayboruds/STORY-GENERATOR-USING-GROQ-API"
                demoLink="https://your-demo-url.com" 
              />
            </Col>


            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={jarvisImage} 
                isBlog={false}
                title="J.A.R.I.V.S Assistant"
                description="A powerful fullstack AI voice assistant inspired by Iron Man's J.A.R.V.I.S. Built with React for the frontend and Node.js for backend integration. Supports voice recognition, AI interaction, and smart automation features."
                ghLink="https://github.com/Nsanjayboruds/J.A.R.I.V.S-ASSISTANT"
                demoLink=" " 
              />
            </Col>



            
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="Plant AI"
                description="Used the plant disease dataset from Kaggle and trained an image classifier model using PyTorch with CNN + Transfer Learning. Achieved 98% accuracy with ResNet34 on 38 leaf disease classes."
                ghLink=" "
                demoLink=" "
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Particles from "../Particles";
import ProfileCard from "../ProfileCard";
import avatar from "../../Assets/avatarmy.jpg";
function About() {
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
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >

              <ProfileCard
                name="NISHANT BORUDE"
                title="FULL STACK DEVELOPER"
                handle="NishantBorude"
                status="Online"
                contactText="Contact Me"
                avatarUrl={avatar}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => window.open('https://github.com/Nsanjayboruds', '_blank')}
              />


              {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </section>
  );
}

export default About;

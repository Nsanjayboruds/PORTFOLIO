import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particles from "../Particles";
import FuzzyText from "../FuzzyText";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  // Optional: Define hover effect props
  const hoverIntensity = 0.4;
  const enableHover = true;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Resume Section */}
      <Container
        id="resume"
        className="resume-section d-flex justify-content-center align-items-center"
        style={{ height: "100vh", textAlign: "center" }}
      >
        <FuzzyText

          baseIntensity={0.2}

          hoverIntensity={hoverIntensity}

          enableHover={enableHover}

        >

          404 NOT FOUND

        </FuzzyText>
      </Container>
    </section>
  );
}

export default ResumeNew;

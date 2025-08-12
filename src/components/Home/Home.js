import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import Particles from "../Particles";

function Home() {
  useEffect(() => {
    const scriptId = "spline-viewer-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.type = "module";
      script.id = scriptId;
      script.src = "https://unpkg.com/@splinetool/viewer@1.10.44/build/spline-viewer.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Particle Background */}
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

      {/* Foreground Content */}
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NISHANT BORUDE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* ✅ Spline Viewer Replacing the Image */}
              <div style={{ width: "100%", height: "500px" }}>
                <spline-viewer
                  url="https://prod.spline.design/wusBdKcJteOBdL7Q/scene.splinecode"
                  transparent
                  style={{ width: "100%", height: "100%" }}
                ></spline-viewer>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;

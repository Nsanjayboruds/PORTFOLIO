// src/components/Type.js
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#61dafb" }}>
      <Typewriter
        options={{
          strings: [
            "Full-Stack Web Developer",
            "Tech Enthusiast",
            "Creative Problem Solver",
            "UI & UX Designer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;

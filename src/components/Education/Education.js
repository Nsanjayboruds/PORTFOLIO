import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaGraduationCap } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import Particles from "../Particles";

function Education() {
    return (
        <section className="education-section" style={{ position: "relative", overflow: "hidden" }}>
            {/* Particle background */}
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


            <h2 className="section-heading">🎓 Education</h2>

            <VerticalTimeline lineColor="#00c9ff">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2023 - 2027"
                    contentStyle={{
                        // background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
                        background:"linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
                        color: "#222",
                        border: "1px solid #ddd",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid #ebedee" }}
                    iconStyle={{
                        background: "linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%)",
                        color: "#fff",
                        boxShadow: "0 0 0 4px rgba(0, 201, 255, 0.4)",
                    }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">
                        B.Tech in Computer Science and Engineering
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        GH Raisoni College of Engineering, Jalgaon
                    </h4>
                    <ul className="timeline-points">
                        <li>Currently pursuing (Expected Graduation: 2027)</li>
                        <li>CGPA: 8.12 (Till 4th Semester)</li>

                    </ul>

                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022 - 2023"
                    contentStyle={{ background: "#fff", color: "purple" }}
                    contentArrowStyle={{ borderRight: "7px solid #00ffc8" }}
                    iconStyle={{
                        background: "#00ffc8",
                        color: "#ffffff",
                        boxShadow: "0 0 0 4px rgba(0,255,200,0.3)",
                    }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">HSC (12th Grade)</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Chhatrapati Shivaji Junior College
                    </h4>
                    <ul className="timeline-points">
                        <li>Percentage: 70%</li>
                        <li>PCM</li>
                    </ul>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </section>
    );
}

export default Education;

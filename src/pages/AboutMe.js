import React from "react";
import Picture from "./portfolio-pic.png";
import Container from "../components/Container"
import Row from "../components/Row";
import Col from "../components/Col";
import "./about.css";

function AboutMe() {
    return (
        <Container>
            <Row>
                <Col size="lg-12">
                    <h1>About Me</h1>
                </Col>
            </Row>
            <Row>
                <Col size="lg-3">
                    <img className="profPic" src={Picture} alt="ProfilePic"/>
                </Col>
                <Col size="lg-9">
                    <p>
                        Full stack web developer building on a degree in math and computer/information sciences. Currently earning a certificate in full stack web development from Rutgers University with newly honed skills in HTML, CSS, JavaScript, Node.js. Patience, professionalism, and collaborative disposition were previously put to use as a tutor for high school computer science students and as a key contributor to a research project requiring the combined skills of my college major. Outside of my current field, I worked at a wealth management firm where I perfected the communication and organizational skills which led to the success of a group effort to develop a video game application. I find myself continuously excited by each new aspect of web development, and I have a particular affinity for JavaScript. I am eager to use all of my work experience, technical skills and my steep learning curve as a full stack developer at a large tech company.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;
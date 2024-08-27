import React from "react";
import { Typography } from "@mui/material";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          If You Don’t Take Risks, You Can’t Create A Future
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
        {/* https://media.licdn.com/dms/image/D4D03AQHMhnJ9SLQovA/profile-displayphoto-shrink_400_400/0/1720434277354?e=1726099200&v=beta&t=7R7ObuRas0PzeWIL9k9S6gfSK5LQK5l8x6F2IkNWkzA */}
          <img
            src="https://imgs.search.brave.com/fVUAKnvB9b4lRQE-Fp-mdziWwtezUlIk_iEjSv4pdyE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzY3LzE5LzM3/LzM2MF9GXzE2NzE5/Mzc3M19uSTNOYVdK/TUJkVFR2ejFFY0Jt/cXZqb2VBVzBXR3ps/dS5qcGc"
            alt="self"
            className="aboutAvatar"
          />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            SURAJ SANDEEP SHAH
          </Typography>
          <Typography style={{ margin: "1vmax 0" }}>
            Full Stack Devloper
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "px",
              lineHeight: "25px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            I am currently in my final year at Walchand Institute of Technology
            (WIT), Solapur, pursuing a degree in Computer Science. As a
            passionate and dedicated student, I have developed a strong interest
            in full stack development, which allows me to utilize my skills in
            both front-end and back-end technologies. I have hands-on experience
            working with the MERN stack (MongoDB, Express.js, React.js, Node.js)
            and have successfully contributed to an e-commerce website project
            using these technologies. Living in Mumbai, I am enthusiastic about
            leveraging my technical skills and knowledge to solve real-world
            problems and contribute to innovative projects.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default About;

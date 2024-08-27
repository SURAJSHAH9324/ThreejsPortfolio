// import { Button, Typography } from "@mui/material";
// import React from "react";
// import "./Project.css";
// import { AiOutlineProject } from "react-icons/ai";
// import { Delete } from "@mui/icons-material";
// import { FaRegSmileWink } from "react-icons/fa";

// export const ProjectCard = ({
//   url,
//   projectImage,
//   projectTitle,
//   description,
//   technologies,
//   isAdmin = false,
//   id,
// }) => {
//   return (
//     <>
//       <a
//         href={url}
//         className="projectCard"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <div>
//           <img
//             src={projectImage}
//             alt="Project"
//             style={{ width: "200px", height: "auto" }}
//           />
//           <Typography variant="h5">{projectTitle}</Typography>
//         </div>
//         <div>
//           <Typography variant="h4"> About Project</Typography>
//           <Typography>{description}</Typography>
//           <Typography variant="h6">Tech Stack: {technologies}</Typography>
//         </div>
//       </a>

//       {isAdmin && (
//         <Button style={{ color: "rgba(40,40,40,0.7)" }}>
//           <Delete />
//         </Button>
//       )}
//     </>
//   );
// };

// const Project = ({ projects }) => {
//   const data = [1, 2, 3];
//   return (
//     <div className="projects">
//       <Typography variant="h3">
//         Projects <AiOutlineProject />
//       </Typography>

//       <div className="projectsWrapper">
//         {data.map((item, index) => (
//           <ProjectCard
//             url="https://www.youtube.com/watch?v=h1igcrpG-Ek&t=4901s&ab_channel=6PackProgrammer"
//             projectImage="https://images.unsplash.com/photo-1720607633896-b990326064f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             projectTitle="code sample"
//             description="lorem mkib djshdsgf fdshfgffsf"
//             technologies="html css"
//           />
//         ))}
//       </div>

//       <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
//         All The Projects Shown Above Are Made By Me <FaRegSmileWink />
//       </Typography>
//     </div>
//   );
// };

// export default Project;

import { Button, Typography } from "@mui/material";
import React from "react";
import "./Project.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  return (
    <>
      <a
        href={url}
        className="projectCard"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <img
            src={projectImage}
            alt="Project"
            style={{ width: "400px", height: "auto" }}
          />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};

const Project = ({ projects }) => {
  const projectData = [
    {
      url: "https://gmail-clone-link.com",
      projectImage:
        "https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png",
      projectTitle: "Gmail Clone",
      description: "A full-featured Gmail Clone built with MERN stack.",
      technologies: "MongoDB, Express, React, Node",
    },
    {
      url: "https://sanjeevani-clinic-link.com",
      projectImage:
        "https://img.indiafilings.com/learn/wp-content/uploads/2016/02/12010840/healthcare-clinic.jpg",
      projectTitle: "Sanjeevani Clinic",
      description: "A clinic management system with patient records and appointments.",
      technologies: "Firebase, Express, React, Node",
    },
  ];

  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            url={project.url}
            projectImage={project.projectImage}
            projectTitle={project.projectTitle}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Project;


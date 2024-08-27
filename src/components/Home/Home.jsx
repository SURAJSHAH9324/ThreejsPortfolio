// import React, { useEffect } from "react";
// import "./home.css";
// import * as THREE from "three";
// import moonImage from "../../images/moon.jpg";
// import venusImage from "../../images/venus.jpg";
// import spaceImage from "../../images/space.jpg";
// import { Typography } from "@mui/material";
// import TimeLine from "../TimeLine/TimeLine";
// import {
//   SiCplusplus,
//   SiReact,
//   SiJavascript,
//   SiMongodb,
//   SiNodedotjs,
//   SiExpress,
//   SiCss3,
//   SiThreedotjs,
//   SiHtml5,
// } from "react-icons/si";
// // import YoutubeCard from "../Youtube/YoutubeCard";
// import Project from "../Projects/project";

// function Home() {
//   useEffect(() => {
//     const textureLoader = new THREE.TextureLoader();
//     const moonTexture = textureLoader.load(moonImage);
//     const venusTexture = textureLoader.load(venusImage);
//     const spaceTexture = textureLoader.load(spaceImage);

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(4, 4, 8);

//     const canvas = document.querySelector(".homeCanvas");
//     const renderer = new THREE.WebGLRenderer({ canvas });

//     const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
//     const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);

//     const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
//     const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
//     const venus = new THREE.Mesh(venusGeometry, venusMaterial);
//     venus.position.set(8, 5, 5);

//     const pointLight = new THREE.PointLight(0xffffff, 20);
//     const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

//     pointLight.position.set(8, 5, 5);
//     pointLight2.position.set(-8, -5, -5);

//     scene.add(moon);
//     scene.add(venus);
//     scene.add(pointLight);
//     scene.add(pointLight2);

//     scene.background = spaceTexture;

//     const constSpeed = 0.01;
//     window.addEventListener("mousemove", (e) => {
//       if (e.clientX <= window.innerWidth / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y += constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y += constSpeed;
//       } else {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y -= constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y -= constSpeed;
//       }

//       if (e.clientY > window.innerHeight / 2) {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y += constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y += constSpeed;
//       } else {
//         moon.rotation.x -= constSpeed;
//         moon.rotation.y -= constSpeed;
//         venus.rotation.x -= constSpeed;
//         venus.rotation.y -= constSpeed;
//       }
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       moon.rotation.y += 0.001;
//       venus.rotation.y += 0.001;
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.render(scene, camera);
//     };

//     animate();
//   }, []);

//   return (
//     <div className="home">
//       <canvas className="homeCanvas"></canvas>

//       <div className="homeContainer">
//         <Typography variant="h3">EDUCATION</Typography>
//         <TimeLine timelines={[1, 2, 3, 4]} />
//       </div>
//       <div className="homeSkills">

//         <Typography variant="h2">SKILLS</Typography>
//         <div className="homeCubeSkills">
//           <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
//             <img
//               src="https://imgs.search.brave.com/TC4R7mLgjO2ZPOLBKROQsPlt-c2NQWhwb6gp_QwdyOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0lTT19DKytf/TG9nby5zdmc"
//             />
//           </div>
//           <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
//             <img
//               src="https://imgs.search.brave.com/r-0-xECXoCpE_Sq2NLiMqTczyrL5wcWcZynHe3LmMzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMy8wNS9yZXZp/c2VkX25vZGUucG5n"
//             />
//           </div>
//           <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
//             <img
//               src="https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn"
//             />
//           </div>
//           <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
//             <img
//               src="https://static.javatpoint.com/core/images/java-logo1.png"
//             />
//           </div>
//           <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
//             <img
//               src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg"
//             />
//           </div>
//           <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
//             <img
//               src="https://imgs.search.brave.com/NKd_YNKGUS-60E020M17udEbs_ofN40Z6yIfLoDIGNA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/ZnJvbnRlbmQuY29t/L2Fzc2V0cy9pbWcv/Y3NzLWxvZ29zLzIw/MjMtY3NzLWxvZ29z/LWdpdGh1Yi1sb2dv/LnBuZw"
//             />
//           </div>
//         </div>
//         <div className="cubeShadow"></div>
//         <div className="homeSkillsBox">
//           <SiCplusplus />
//           <SiReact />
//           <SiJavascript />
//           <SiNodedotjs />
//           <SiExpress />
//           <SiMongodb />
//           <SiCss3 />
//           <SiHtml5 />
//           <SiThreedotjs />
//         </div>

//       </div>
//       {/* <div className="homeYoutube">
//           <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

//           <div className="homeYoutubeWrapper">

//            <YoutubeCard
//            image ="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//            title="code"
//            />
//            <YoutubeCard
//            image ="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//            title="code"
//            />
//            <YoutubeCard
//            image ="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//            title="code"
//            />
//           </div>
//         </div> */}
//         <Project/>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect } from "react";
import * as THREE from "three";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import { Button, Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import "./home.css";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import Project from "../Projects/project";
// import YoutubeCard from "../Youtube/YoutubeCard";

function Home() {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(0, 0, 0); // Previous position

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5); // Previous position

    const pointLight = new THREE.PointLight(0xffffff, 1); // Increased intensity
    const pointLight2 = new THREE.PointLight(0xffffff, 0.5); // Increased intensity
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Adding directional light

    pointLight.position.set(0, 0, 0);
    pointLight2.position.set(-8, -5, -5);
    directionalLight.position.set(1, 1, 1).normalize(); // Position and direction

    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(directionalLight);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      } else {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      } else {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>SURAJ SANDEEP SHAH</p>
          <Button
            style={{
              backgroundColor: "black",
              boxShadow:'none',
              borderRadius: "100px",
              padding: "15px",
              color: "white",
              position: "absolute",
              left: "2px",
              marginLeft: "100px",
              cursor: "pointer",
              
            }}
            onClick={() => {
              window.open("/surajShah.pdf", "_blank");
            }}
          >
            Download CV
          </Button>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">FULL</Typography>
          <Typography variant="h2">STACK</Typography>
          <Typography variant="h2">WEB DEVELOPER</Typography>
          {/* <Typography variant="h2">CONTENT CREATOR</Typography> */}
        </div>
      </div>

      <div className="homeContainer">
        <Typography variant="h3">EDUCATION</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography
          style={{
            color: "white",
            fontWeight: 900,
          }}
          variant="h2"
        >
          SKILLS
        </Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src="https://imgs.search.brave.com/TC4R7mLgjO2ZPOLBKROQsPlt-c2NQWhwb6gp_QwdyOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0lTT19DKytf/TG9nby5zdmc" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src="https://imgs.search.brave.com/r-0-xECXoCpE_Sq2NLiMqTczyrL5wcWcZynHe3LmMzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMy8wNS9yZXZp/c2VkX25vZGUucG5n" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src="https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="https://static.javatpoint.com/core/images/java-logo1.png" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src="https://imgs.search.brave.com/NKd_YNKGUS-60E020M17udEbs_ofN40Z6yIfLoDIGNA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/ZnJvbnRlbmQuY29t/L2Fzc2V0cy9pbWcv/Y3NzLWxvZ29zLzIw/MjMtY3NzLWxvZ29z/LWdpdGh1Yi1sb2dv/LnBuZw" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiReact />
          <SiJavascript />
          <SiNodedotjs />
          <SiExpress />
          <SiMongodb />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />
        </div>
      </div>
      <Project />
    </div>
  );
}

export default Home;

import React from "react";
// import { FaGithubSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Home = () => (
  <div className="home-header">
    <div id="imgcontainer">
      <img
        src={require("../images/banner.JPG")}
        className="main-image .col-12"
        alt="erika"
      />
      <div className="block" />
      <div className="stack">
        <span
          className="stacks top"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="2000"
         
        >
          Let the beauty of what you love
        </span>

        <span
          className="stacks middle"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="2500"

    
        >
          {" "}
          be what you do.{" "}
        </span>

        <span
          className="stacks smaller"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="3000"
        >
          --Rumi
        </span>
      </div>

      <p />
      <img
        src={require("../images/favicon.ico")}
        className=" logito"
        alt="logoito"
      />
    </div>
  </div>
);

// const Home = () => (
//   <div className="home-header">

//     <div className="containter">
//       <div id="imgcontainer">
//         <img
//           src={require("../images/banner.JPG")}
//           className="main-image .col-12"
//           alt="erika"
//         />
//         <div className="block" /> <p className="stack">Full Stack Developer</p>
//       </div>
//     </div>

//   </div>
// );
export default Home;

//hero
//   <div id="main-home">

//     <img
//       src={require("../images/portrait.jpg")}
//       className="main-image"
//       alt="erika"
//     />

//     <div id="main_content">

//       <h2 className="fade fade_ani h2">
//         Full Stack Web Developer
//         <br /> aspiring to further advance
//         <br /> creative design skills & target
//         <br />client-focused problem solving.
//       </h2>

//       <div id="social fade fade_ani">
//         <div
//           className="fab github"
//           onClick={() => window.open("https://github.com/erikamats ")}
//         >
//           <FaGithubSquare className="exp github"/>
//         </div>

//         <div
//           className="fab instagram"
//           onClick={() => window.open("https://instagram./erikamats ")}
//         >
//           <FaInstagram className="exp instagram " />
//         </div>

//         <div
//           className="fab linkedIn"
//           onClick={() =>
//             window.open("https://www.linkedin.com/in/erikamatsumoto/")
//           }
//         >
//           <FaLinkedinIn className="linkedIn exp" />
//         </div>
//       </div>

//     </div>
//   </div>
// );

// // onClick={() => window.open("https://github.com/erikamats ")}

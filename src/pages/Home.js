import React from "react";
import { FaGithubSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import Menu from "../components/Menu";

const Home = (props) => (
 <div className="homeHeader">

<div id="main-home">
<img
  src={require("../images/portrait.jpg")}
  className="main-image"
  alt="erika"
/>

<div id="main_content">


  <h2 className="fade fade_ani h2">
    Full Stack Web Developer 
    <br /> aspiring to further advance 
    <br /> creative design skills & target
    <br />client-focused problem solving.
  </h2>

  <div id="social fade fade_ani">
    <div
      className="fab github"
      onClick={() => window.open("https://github.com/erikamats ")}
    >
      <FaGithubSquare className="exp github"/>
    </div>

    <div
      className="fab instagram"
      onClick={() => window.open("https://instagram./erikamats ")}
    >
      <FaInstagram className="exp instagram " />
    </div>

    <div
      className="fab linkedIn"
      onClick={() =>
        window.open("https://www.linkedin.com/in/erikamatsumoto/")
      }
    >
      <FaLinkedinIn className="linkedIn exp" />
    </div>
  </div>

</div>
</div> */}


 </div>
 
);

// onClick={() => window.open("https://github.com/erikamats ")}

export default Home;



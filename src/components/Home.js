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


export default Home;


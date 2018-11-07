import React, { Component } from "react";
import * as moment from "moment";
import scrollToComponent from "react-scroll-to-component-ssr";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Home from "./components/Home";
import About from "./components/About";
import MultiCarouselPage from "./components/MultiCarouselPage";
import Contact from "./components/Contact";

import "./App.css";
import "./keyframes.css";
import "./queries.css";

let now = moment().format("YYYY");

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
  componentDidMount() {
    scrollToComponent(this.Home, {
     duration: 2000,
     offset: -60

    });
  }

  render() {
    return (
      <main>
        <div id="nav">
          <h2
            className="navLogo"
            onClick={() =>
              scrollToComponent(this.Home, {
                offset: 0,
                align: "top",
                duration: 1500,
                ease: "inOutBack"
              })
            }
          >
            {" "}
            Erika Matsumoto
          </h2>

          <div id="menu">
            <div
              className="menuitem"
              onClick={() =>
                scrollToComponent(this.About, {
                  offset: 300,
                  ease: "inOutBack"
                })
              }
            >
              About
            </div>

            <div
              className="menuitem"
              onClick={() =>
                scrollToComponent(this.MCP, {
                  offset: 700,
                  align: "top",
                  duration: 1500,
                  ease: "inOutBack"
                })
              }
            >
              Work
            </div>

            <div
              className="menuitem"
              onClick={() =>
                scrollToComponent(this.GIT, {
                  offset:3100,
                  align: "top",
                  duration:2500
                  // ease: "inOutBack"
                })
              }
            >
              Contact
            </div>

            <div className="menuitem respMenu" onClick={this.showNav}>
              <img
                src={require("../src/images/favicon.ico")}
                className=" respimg"
                alt="logoito"
              />
            </div>
          </div>
        </div>

        <div className="main">
          <section
            className="home"
            ref={section => {
              this.Home = section;
            }}
          >
            <Home />
          </section>
          <section
            className="about"
            ref={section => {
              this.About = section;
            }}
          >
            <About />
          </section>

          <section
            className="mcp"
            ref={section => {
              this.MCP = section;
            }}
          >
            <MultiCarouselPage />
          </section>

          <section
            className="git"
            ref={section => {
              this.GIT = section;
            }}
          >
            <Contact />
          </section>
        </div>

        <div className="footer-container col-12 ">

            <div className="copy-left">
            <span
              onClick={() =>
                scrollToComponent(this.Home, {
                  duration: 2000,
                  ease: "inOutBack"
                })
              }
            >
              {" "}
              Home
            </span>
           
            <span
              onClick={() =>
                scrollToComponent(this.About, {
                  align: "top",
                  duration: 1000,
                  ease: "inOutBack"
                })
              }
            >
              {" "}
              About
            </span>
          
            <span
              onClick={() =>
                scrollToComponent(this.MCP, {
                  offset: 700,
                  align: "top",
                  duration: 1500,
                  ease: "inOutBack"
                })
              }
            >
              {" "}
              Work
            </span>
          </div>
          <div className="copy-middle ">
            <span
              className="github"
              onClick={() => window.open("https://github.com/erikamats ")}
            >
              {" "}
              <FaGithub className="exp github " />
            </span>

            <span
              className=" linkedIn"
              onClick={() =>
                window.open("https://www.linkedin.com/in/erikamatsumoto/")
              }
            >
              <FaLinkedinIn className="linkedIn exp" />
            </span>
            <span
              className=" instagram"
              onClick={() =>
                window.open("https://www.instagram.com/maaatsiii/")
              }
            >
              <FaInstagram className="exp instagram " />
            </span>
          </div>

          <div
            className="copy-right copyright"
            onClick={() =>
              scrollToComponent(this.Home, {
                duration: 2000,
                ease: "inOutBack"
              })
            }
          >
            Copyright © {now} Erika Matsumoto
          </div>
        </div>
      </main>
    );
  }
}

export default App;

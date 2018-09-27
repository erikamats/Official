// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import NotFound from "./components/NotFound";
// import ContactPage from "./components/Contact2";
// import Footer from "./components/Footer";
// import Menu from "./components/Menu";
import React, { Component } from "react";
import * as moment from "moment";

import Home from "./components/Home";

import About from "./components/About";
import MultiCarouselPage from "./components/MultiCarouselPage";
import Contact from "./components/Contact";
import scrollToComponent from "react-scroll-to-component-ssr";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import "./App.css";
import "./Queries.css";
let now = moment().format("YYYY");

class App extends Component {
  componentDidMount() {
    scrollToComponent(this.Home, {
      offset: 0,
      align: "bottom",
      duration: 2000,
      ease: "inOutBounce"
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
                  offset: 480,
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
                  offset: 1100,
                  align: "top",
                  duration: 2000,
                  ease: "inOutBack"
                })
              }
            >
              Contact
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

          <div className="footer-container col-12 ">
            <div className="copy-left col-4"
              onClick={() =>
                  scrollToComponent(this.Home, {
                    duration: 2000,
                    ease: "inOutBack"
                  })
                }>
              <span className="copyright">
                Copyright © {now} Erika Matsumoto
              </span>
            </div>

            <div className="copy-middle col-4">
              <div
                className="fab github"
                onClick={() => window.open("https://github.com/erikamats ")}
              >
                <FaGithub className="exp github " />
              </div>

              <div
                className="fab linkedIn"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/erikamatsumoto/")
                }
              >
                <FaLinkedinIn className="linkedIn exp" />
              </div>
              <div
                className="fab instagram"
                onClick={() =>
                  window.open("https://www.instagram.com/maaatsiii/")
                }
              >
                <FaInstagram className="exp instagram " />
              </div>
            </div>

            <div className="copy-right col-4">
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
                    duration: 1500,
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
                    offset: 400,
                    align: "top",
                    duration: 1500,
                    ease: "inOutBack"
                  })
                }
              >
                {" "}
                Work
              </span>
              <span  className="footer-contact" onClick={() => scrollToComponent(this.Contact)}>
                {" "}
                Contact
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

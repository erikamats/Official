import React from "react";
import { Row, Input, Col } from "react-materialize";

import { FaGithubSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { MdStreetview, MdContactMail, MdModeComment } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";

class Contact extends React.Component {
  render() {
    return (
      <div
        className="contact-container col-12"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="contact-label">
          <div className="contact-block" />
          <p className="contact-stack">Contact</p>
          </div>

          <div className="contact-p ">
            <span className="uno"> Erika Matsumoto</span>
            <span className="tres"> Austin, Texas </span>
            <span className="dos">(512) 813-0589 </span>
            <div id="social">
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
            <div
              className="fab github"
              onClick={() => window.open("https://github.com/erikamats ")}
            >
              <FaGithubSquare className="exp github " />
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form
            action="https://formspree.io/erikacodes@gmail.com"
            method="POST"
          >
            <Input l={8} label="Full Name" name="full-name" validate>
              <MdStreetview />
            </Input>

            <Input type="email" name="email" label="Your Email" l={4} validate>
              <MdContactMail />
            </Input>

            <Input
              l={12}
              type="textarea"
              name="message"
              label="Shoot me a message!"
            >
              <MdModeComment />
            </Input>

            <Row>
{/*              
              <Col xs={3} s={3} m={3} l={2} /> */}
              <Col xs={6} s={6} m={6} l={8} >
                <button
                  type="submit"
                  value="Send"
                  className="form-btn hvr-skew-forward z-depth-3"
                >
                  Send <IoMdPaperPlane />
                </button>
              </Col>
              {/* <Col   xs={3} s={3} m={3} l={2} /> */}
            </Row>
          </form>
        </div>

        <div className="touch ">
          <h3 className="contact-reach">Get in Touch!</h3>

          <p className="merp">
            Whether you want to say
            hi 
            <span>or if you'd like to share
            your feedback,  </span>
            <span>   I'd love to hear from you! </span>
         
          </p>
        </div>
      </div>
    );
  }
}
export default Contact;

import React from "react";
import { Row, Input, Col } from "react-materialize";

import { FaGithubSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { MdStreetview, MdContactMail, MdModeComment } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";


class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container col-12">
        <div className="contact-label">
          <div className="contact-block" />
          <p className="contact-stack">Contact</p>
          <div className="contact-p ">
            <span className="uno"> Erika Matsumoto</span>
            <span className="tres"> Austin, Texas </span>
            <span className="dos">(512) 813-0589 </span>
          </div>

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
              <Col s={3} m={3} l={2} />
              <Col s={3} m={3} l={2} />
              <Col s={6} m={6} l={8} className="center">
                <button
                  type="submit"
                  value="Send"
                  className="form-btn hvr-skew-forward z-depth-3"
                >
                  Send <IoMdPaperPlane />
                </button>
              </Col>
              
            </Row>
          </form>
        </div>

       

        <div className="touch ">
          <h2 className="contact-reach">Get in Touch!</h2>

          <h5 className="merp">
            Whether you want to say  <span className="hi hvr-buzz-out">  hi  </span>  or you'd like to share your feedback, I'd love to hear from you!
          </h5>
        </div>
      </div>
    );
  }
}
export default Contact;

/* <div id="main-contact">
<Menu />

<div id="main_content">
  <Row>
    <Col className="touch" m={12} l={5} s={12}>
      <div className="touch">
        <h2>Get in Touch!</h2>
        <h4 className="touchline"> I'd love to hear from you!</h4>
      </div>

      <div className="contact-info " >
        <h3> Erika Matsumoto</h3>
        <p> Austin, Texas </p>

        <span>(512) 813-0589 </span>

        <div id="social fade fade_ani">
        <div
          className="fab github"
          onClick={() => window.open("https://github.com/erikamats ")}
        >
          <FaGithubSquare className="exp github " />
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

      
    </Col>

    <Col className="contact-form" m={12} l={7} s={12}>
      <form
        action="https://formspree.io/erikacodes@gmail.com"
        method="POST"
      >
        <Input
          l={6}
          m={6}
          s={12}
          label="First Name"
          name="first-name"
          validate
        >
         <MdStreetview/>
        </Input>

        <Input l={6} m={6}  s={12} label="Last Name" name="last-name" validate>
        <MdStreetview/>
        </Input>

        <Input
          type="email"
          name="email"
         label="Your Email"
         l={6} m={6}
          s={12}
          validate
        >
        <MdContactMail/>
        </Input>

        <Input
          s={12}
          l={6} m={6}
          label="Telephone"
          name="phoneNumber"
          validate
          type="tel"
        >
          <MdPhoneInTalk/>
        </Input>

        <Input
    
          s={12}
          type="textarea"
          name="message"
          label="Shoot me a message!"
        >
          <MdModeComment/>
        </Input>

        <Row>
          <Col s={3} m={3} l={3} />
          <Col s={6} m={6} l={6} className="center">
            <Button type="submit" value="Send" className="form-btn">
              Send an Email!
            </Button>
          </Col>
          <Col s={3} m={3} l={3}/>
        </Row>
      </form>
    </Col>
    </Row>
</div>
</div> */
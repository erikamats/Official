import React from "react";
import { Row, Input, Icon, Col, Button } from "react-materialize";
import Menu from "../components/Menu";
import { FaGithubSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

class Contact extends React.Component {
  render() {
    return (
      <div id="main-contact">
        <Menu />

        <div id="main_content">
          <Row>
            <Col m={12} l={5}>
              <div className="touch">
                <h2>Get in Touch!</h2>
                <h4 className="touchline"> I'd love to hear from you!</h4>
              </div>

              <div className="contact-info">
                <h3> Erika Matsumoto</h3>
                <p> Austin, Texas </p>

                <span>(512) 813-0589</span>

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
                  m={12}
                  s={12}
                  label="First Name"
                  name="first-name"
                  validate
                >
                  <Icon>streetview</Icon>
                </Input>

                <Input l={6} m={12}  s={12} label="Last Name" name="last-name" validate>
                  <Icon>streetview</Icon>
                </Input>

                <Input
                  type="email"
                  name="email"
                  icon="contact_mail"
                  label="Your Email"
                  s={12}
                  validate
                />

                <Input
                  s={12}
                  label="Telephone"
                  name="phoneNumber"
                  validate
                  type="tel"
                >
                  <Icon>phone_in_talk</Icon>
                </Input>

                <Input
                  s={12}
                  type="textarea"
                  name="message"
                  label="Shoot me a message!"
                >
                  <Icon>mode_edit</Icon>
                </Input>

                <Row>
                  <Col s={3} />
                  <Col s={6}>
                    <Button type="submit" value="Send" className="form-btn">
                      Send an Email!
                    </Button>
                  </Col>
                  <Col s={3} />
                </Row>
              </form>
            </Col>
            {/* <Col s={1} /> */}
          </Row>
        </div>
      </div>
    );
  }
}
export default Contact;

import React from "react";
import * as moment from "moment";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Menu from "./Menu"
let now = moment().format("YYYY");

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container col-12 ">
        <div className="copy-left col-4">
          <span className="copyright">Copyright © {now} Erika Matsumoto</span>
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
            onClick={() => window.open("https://www.instagram.com/maaatsiii/")}
          >
            <FaInstagram className="exp instagram " />
          </div>
        </div>

        <div className="copy-right col-4">
       
        <span >  Home</span>
          <span> About</span>
          <span> Work</span>
          <span> Contact</span>
        </div>
      </div>
    );
  }
}
export default Footer;

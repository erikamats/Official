import React from "react";
import * as moment from "moment";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Menu from "./Menu"

// import {
//   Link,
//   DirectLink,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller
// } from "react-scroll";

let now = moment().format("YYYY");

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  //    this.scrollToTop = this.scrollToTop.bind(this);

  // }

  // componentDidMount() {
  //   Events.scrollEvent.register("begin", function() {
  //     console.log("begin", arguments);
  //     this.props.onRef(this)
  //   });

  //   Events.scrollEvent.register("end", function() {
  //     console.log("end", arguments);
  //   });

  //   scrollSpy.update();
  // }
  // scrollTo() {
  //   scroller.scrollTo("scroll-to-element", {
  //     duration: 800,
  //     delay: 0,
  //     smooth: "easeInOutQuart"
  //   });
  // }

  // scrollToTop() {
  //   scroll.scrollToTop();
  // }
  // componentWillUnmount() {
  //   Events.scrollEvent.remove("begin");
  //   Events.scrollEvent.remove("end");
  //   this.props.onRef(undefined)
  // }
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
       
        <span>  Home</span>
          <span>  About</span>
          <span > Work</span>
          <span > Contact</span>
        </div>
      </div>
    );
  }
}
export default Footer;

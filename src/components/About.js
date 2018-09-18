import React from "react";
class About extends React.Component {
  render() {
    return (
      <div className="about-container col-12">

        <div className="col-2 iAm-label">
        <p className="iAm-stack">I am <span className="
        dots">...</span></p>
          <div className="iAm-block" />      
        </div>

        <p className="iAm-merp col-9">
          {" "}
          A Full Stack Web Developer living in Austin, Texas. I recently took a
          leap into web development and I am very happy to have taken the initiative to pursue something that
          I genuinly enjoy!{" "}
        </p>
        {/* <div className="col-2 iAm-label"/> */}
      </div>
    );
  }
}

export default About;

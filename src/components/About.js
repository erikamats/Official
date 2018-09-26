import React from "react";
class About extends React.Component {
  render() {
    return (
      <div className="about-container col-12">
        <div className="col-2 iAm-label">
          <p className="iAm-stack">
            I am{" "}
            <span
              className="
        dots"
            >
              ...
            </span>
          </p>
          <div className="iAm-block" />
        </div>

        <p className="iAm-merp col-9">
        I am a Full Stack Web Developer living in Austin, Texas. I recently took a proud leap into web development to pursue something that I genuinely enjoy and I am thrilled about 
        </p>
        <p>
          {" "}
          I am a problem solver and people lover. I always welcome challenges because I am bound to learn something I didn't know before and I thrive in environments where I can continue to grow. I am
          passionate about leading by example and sharing my knowledge and best practices with others. I take pride in the quality of all of my endeavors and always put my best efforts into doing things right which have led to my career achievements.
        </p>
        {/* <div className="col-2 iAm-label"/> */}
      </div>
    );
  }
}

export default About;

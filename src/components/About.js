import React from "react";
class About extends React.Component {
  render() {
    return (
      <div className="about-container col-12">
        <div className="col-2 iAm-label">
          <p className="iAm-stack ">
            I am{" "}
            
            {/* <span
              className="
        dots"
            >
              ...
            </span> */}
          </p>
          <div className="iAm-block" />
        </div>

        <div className="iAm-merp col-9">
        <p>
        <span className="small-dont"> I am</span> <span className="dots">Erika Matsumoto, </span> a Full Stack Web Developer living in Austin, Texas. I recently took a proud leap into web development to pursue something that I genuinely enjoy and is thrilling!
        </p>
        <p>
          {" "}
          I am a problem solver and people lover. I welcome new challenges because we all learn from experience and this is how we continue to grow. I am
          passionate about leading by example and sharing my knowledge as well as best practices with others. I take pride in the quality of all of my endeavors and always put my best efforts into doing things right, leading to my career achievements.
        </p>
        <p>
          When I am not coding, I enjoy spending time with my sisters and friends. I love to play with makeup during my free time and fashion is a major creative outlet for me; plus... it's a great confidence booster - it makes me feel like I can conquer just about anything! #GRLPWR
        </p>
       
        </div>
        {/* <div className="col-2 iAm-label"/> */}
      </div>
    );
  }
}

export default About;

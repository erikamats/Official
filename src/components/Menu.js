import React from "react";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class Menu extends React.Component {

  constructor(props) {
    super(props);
     this.scrollToTop = this.scrollToTop.bind(this);

  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
      this.props.onRef(this)
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
    this.props.onRef(undefined)
  }

  render() {
 
    return(
      <div id="nav">
 
        <h2 className="navLogo"> Erika Matsumoto</h2>

        

        <div id="menu">
          <div className="hideme menuitem" onClick={() => scroll.scrollTo(500)} >About</div>

          <div className=" menuitem" onClick={() => scroll.scrollTo(1080)}>Work</div>

          <div className=" menuitem"
          
          onClick={() => scroll.scrollTo(1600)}>Contact</div>
        </div>
      </div>
    );
  }
}
export default Menu;

// state = {
//   clicked: false
// };

// toggle = () => {
//   // console.log("click detected");
//   this.setState({
//     clicked: !this.state.clicked
//   });
// };

  /* <div id="header" className="fade fade_ani">
      
        <div className="h1 hideme2">Y654`13A  V 
          <h1>Erika Matsumoto</h1>
        </a>
      </div>

      <div id="menu">
        <a href="/" className="hideme menuitem">
          Home
        </a>
        <a className="menuitem" href="/work">
          Work
        </a>
        <a className="menuitem" href="/contact">
          Contact
        </a>
      </div>
    </div> */


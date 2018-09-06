import React from "react";
import { Link } from "react-router-dom";
class Menu extends React.Component {
  // state = {
  //   clicked: false
  // };

  // toggle = () => {
  //   // console.log("click detected");
  //   this.setState({
  //     clicked: !this.state.clicked
  //   });
  // };

  render() {
    return (
      <div id="nav">
        <Link to="/">
          <h2 className="navLogo"> Erika Matsumoto</h2>
        </Link>

        <div id="menu">
          <Link to="/" className="hideme menuitem">
            Home
          </Link>

          <Link to="/work" className=" menuitem">
            Work
          </Link>
          <Link to="/contact" className=" menuitem">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}
export default Menu;

{
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
}

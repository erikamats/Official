import React from "react";

class Menu extends React.Component {
  state = {
    clicked: false
  };

  // toggle = () => {
  //   // console.log("click detected");
  //   this.setState({
  //     clicked: !this.state.clicked
  //   });
  // };

  render() {
    return (
      <div id="header" className="fade fade_ani social">
 
        <a href="/">
          <h1 className="h1 hideme2">Erika Matsumoto</h1>
        </a>

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
      </div>
    );
  }
}
export default Menu;

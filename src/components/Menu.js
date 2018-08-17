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
      <div id="header" className="fade fade_ani">
        {/* <div className="h1"> <Link to="/"><h1>Erika Matsumoto</h1></Link> */}

        <a href="/">
          <h1 className="h1">Erika Matsumoto</h1>
        </a>

        <div id="menu">
          <a href="/" className="hideme">Home</a>
          <a href="/work">Work</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    );
  }
}
export default Menu;

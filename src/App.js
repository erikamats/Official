// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import NotFound from "./components/NotFound";
import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";

import Contact from "./components/Contact";
// import ContactPage from "./components/Contact2";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./components/About";
// import ProjectsPage from "./components/ProjectsPage";
import MultiCarouselPage from "./components/MultiCarouselPage";
import Work from "./components/Work";
import "./Queries.css"

class App extends Component {

 
  render() {
    return (
      <main>
        <Menu  />
     
          <div className="main">
            <Home />
            <About />
            <MultiCarouselPage />
            {/* <Work/> */}
            <Contact  />
            <Footer />
          </div>

      </main>
    );
  }
}

export default App;

/* <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter> */

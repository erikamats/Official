import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Menu from "./components/Menu"


class App extends Component {
  render() {
    return (
      <div className="App">
    
          <BrowserRouter>
          
            <Switch>
              <Menu/>
              <div id="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
              </div>
            </Switch>
          </BrowserRouter>
        </div>
     
    );
  }
}

export default App;

import React, { Component } from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  Row,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Fa
} from "mdbreact";

import "./Work.css"

class Work extends Component {
  render() {
    return (
      <div className="work-container ">
        <div className=" work-label">
          <p className="work-stack">Work</p>
          <div className="work-block" />
        </div>

        <div className="row">
          {/* <!-- Grid column --> */}
          <div className="column-2 px-2 mb-r">
            {/* <!--Card--> */}
            <div className="card default-color-dark">
              {/* <!--Card image--> */}
              <div className="view">
                <img
                  src="https://res.cloudinary.com/matsi/image/upload/v1537201477/portfolio/Screen_Shot_2018-09-17_at_11.23.56_AM.png"
                  className="card-img-top"
                  alt="photo"
                />
                <a href="#">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body text-center">
                {/* <!--Title--> */}
                <h4 className="card-title white-text">Daria Click Game</h4>
                {/* <!--Text--> */}
                <p className="card-text white-text">
                  Inspired by one of my favorite TV shows, this memory game
                  breaks up the application's UI into components, manages
                  component state and responds to user events. See if you can
                  avoid clicking the same image twice!
                </p>
                <button
                  className="btn btn-md "
                  onClick={() =>
                    window.open("https://daria-game.now.sh/", "_blank")
                  }
                >
                  <Fa icon="clone" className="left" /> View project
                </button>
                <button
                  className="btn btn-md "
                  onClick={() =>
                    window.open(
                      "https://github.com/erikamats/cliquey",
                      "_blank"
                    )
                  }
                >
                  <Fa icon="github" className="left" /> View Github
                </button>
              </div>
            </div>
            {/* <!--/.Card--> */}
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="column-1 px-2 mb-r">
            {/* <!--Card--> */}
            <div className="card primary-color-dark">
              {/* <!--Card image--> */}
              <div className="view">
                <img
                  src="https://res.cloudinary.com/matsi/image/upload/v1536597187/portfolio/Giphy.png"
                  className="card-img-top"
                  alt="photo"
                />
                <a href="#">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body text-center">
                {/* <!--Title--> */}
                <h4 className="card-title white-text">Giphy API Request</h4>
                {/*  <!--Text--> */}
                <p className="card-text white-text">
                  Get to know me! This dynamic web pages populates gifs that
                  describe some of the things I like by calling the Giphy API
                  and using Javascript and jQuery to change the HTML on the
                  site.
                </p>
                <button
                  className="btn btn-md "
                  onClick={() =>
                    window.open("https://erikamats.github.io/Giphy/", "_blank")
                  }
                >
                  <Fa icon="clone" className="left" /> View project
                </button>
                <button
                  className="btn btn-md "
                  onClick={() =>
                    window.open("https://github.com/erikamats/Giphy")
                  }
                >
                  <Fa icon="github" className="left" /> View GitHub
                </button>
              </div>
            </div>
            {/* <!--/.Card--> */}
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="column-1 px-2">
            {/* <!--Card--> */}
            <div className="card warning-color-dark">
              {/* <!--Card image--> */}
              <div className="view">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                  className="card-img-top"
                  alt="photo"
                />
                <a href="#">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>

              {/* <!--Card content--> */}
              <div className="card-body text-center">
                {/* <!--Title--> */}
                <h4 className="card-title white-text">FreeNica</h4>
                {/* <!--Text--> */}
                <p className="card-text white-text">
                  Non-profit website created to bring exposure to current events
                  in Nicaragua.
                </p>
                <button
                  className="btn btn-md "
                  onClick={() => window.open("#", "_blank")}
                >
                  <Fa icon="clone" className="left" /> View project
                </button>
                <button
                  className="btn btn-md "
                  onClick={() => window.open("#", "_blank")}
                >
                  <Fa icon="github" className="left" /> View Github
                </button>
              </div>
            </div>
            {/* <!--/.Card--> */}
          </div>
          {/* <!-- Grid column --> */}
        </div>

        


        
      </div>
    );
  }
}

export default Work;

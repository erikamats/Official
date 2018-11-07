import React, { Component } from "react";

import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Fa
} from "mdbreact";

class MultiCarouselPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects1: [
        {
          title: "Giphy API Request",
          text:
            "This dynamic web pagevpopulates gifs to describe things I like and enjoy via an API call whilte using Javascript and jQuery.",
          picture:
            "https://res.cloudinary.com/matsi/image/upload/v1540961646/optimized%20portfolio/zoanypcrq5zaw77sxl6r.png",
          deployed: "https://erikamats.github.io/Giphy/",
          github: "https://github.com/erikamats/Giphy"
        },
        {
          title: "Daria Click Game ",
          text:
            "Inspired by one of my favorite shows, this memory game manages component state and responds to user events. ",
          picture:
            "https://res.cloudinary.com/matsi/image/upload/v1540961645/optimized%20portfolio/cwsnmioptn4kbgmbr4t1.png",
          deployed: "https://daria-game.now.sh/",
          github: "https://github.com/erikamats/cliquey"
        },
        {
          title: "keiMatsumotoMedia",
          text: "In Progress: Full web development of keiMatsumotoMedia. Portfolio for young phototographer and videographer.",
          picture: "https://res.cloudinary.com/matsi/image/upload/v1540961645/optimized%20portfolio/keiMatsMedia.png",
          deployed: "https://keimatsumotomedia.herokuapp.com",
          github:"https://bitbucket.org/erikamats/keimatsumotomedia/src"

        },
        {
          title: "FreeNica",
          text:
            " In Progress: Group project website for nonprofit in efforts to bring more awareness to ongoing protests in Nicaragua. ",
          picture:
            "https://res.cloudinary.com/matsi/image/upload/q_auto:eco/v1539585507/freenicalogo.png ",
          deployed: "http://freenica.herokuapp.com/",
          github: "https://github.com/kevinepena/Nicalibre"
        },
    
        {
          title: "Train Schedule",
          text:
            "This application incorporates Firebase to host arrival and departure data while manipulating information using Moment.js  ",
          picture:
            "https://res.cloudinary.com/matsi/image/upload/v1540961645/optimized%20portfolio/wfr52vzhytebadmztse9.png",
          deployed: "https://erikamats.github.io/TrainActivity/",
          github: "https://github.com/erikamats/TrainActivity"
        },
        {
          title: "Responsive Website",
          text:
            "  First mobile-responsive layout using media queries for a dummy portfolio using HTML, CSS, GitHub and GitHub Pages. ",
          picture:
            "https://res.cloudinary.com/matsi/image/upload/v1540961646/optimized%20portfolio/wgiisvqirpu8ol97cjeh.png",
          deployed:
            "https://erikamats.github.io/Bootstrap-Portfolio/index.html",
          github: "https://github.com/erikamats/Responsive-Portfolio"
        },
        {
          title: "Word Guess",
          text:
            " Similar to hangman, guess the baby product at play pressing on any letter of your choice! You lose the round if you exhaust all of your 5 guesses! ",
          picture:
            " https://res.cloudinary.com/matsi/image/upload/v1540961645/optimized%20portfolio/dzbjcspdxyc0kvplxa10.png",
          deployed: " https://erikamats.github.io/Word-Guess-Name/",
          github: "https://github.com/erikamats/Word-Guess-Name"
        },
        {
          title: "Lots more is underway!",
          text: "Please come back soon to check it out!",
          picture: "https://res.cloudinary.com/matsi/image/upload/v1540961645/optimized%20portfolio/ss5bailbf8bnzdorwi91.jpg",
          deployed: "#",
          github:"#"
        }
      ]
    };
  }
  render() {
    return (
      <div
        className="slides col-12"
        data-aos="fade-right"
        data-aos-duration="2500"
      >
       <h1> Projects </h1>

       
        <div className="sliderow"
          data-aos="fade-bottom"
          data-aos-delay="100"
          data-aos-duration="3000"
        
        >
          {this.state.projects1.map(proj1 => {
            return (
              <div key={proj1.title} className="card-col ">
                <Card className="mb-2 col-12">
                  <CardImage className="img-fluid " src={proj1.picture} />
                  <CardBody>
                    <CardTitle>{proj1.title}</CardTitle>
                    <CardText className="d-block d-sm-block d-md-block">
                      {proj1.text}
                    </CardText>
                    <button className="btn btn-md ">
                      <a href={proj1.deployed} target="_blank">
                        <Fa icon="clone" />
                        <span className="d-sm  d-md ">View</span>
                      </a>
                    </button>

                    <button className="btn btn-md ">
                      <a href={proj1.github} target="_blank">
                        <Fa icon="github" />
                        <span className="d-sm  d-md">Src</span>
                      </a>
                    </button>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MultiCarouselPage;


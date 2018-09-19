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

class MultiCarouselPage extends Component {
  render() {
    return (

    
      <div className="col-12 slides" >
       <div className=" work-label">
        <p className="work-stack">Work</p>
          <div className="work-block" />      
        </div>
   
        <Carousel
          activeItem={1}
          length={3}
          slide={true}
          showIndicators={true}
          className="carousel slide carousel-multi-item"
          data-ride="carousel"
        >
              

          <CarouselInner>
            <Row className="carousel-row">
              <CarouselItem itemId="1">
                <div className="card-col ">
                  <Card className="mb-2">
                    <CardImage
                      className="img-fluid"
                      src="https://res.cloudinary.com/matsi/image/upload/v1537201150/portfolio/Screen_Shot_2018-09-17_at_11.17.40_AM.png"
                    />
                    <CardBody>
                      <CardTitle>Giphy API Request</CardTitle>
                      <CardText className="d-none d-sm-block d-md-block">
                        Get to know me! This dynamic web pages populates gifs that describe some of the things I like by calling the Giphy API and using Javascript and jQuery to change the HTML on the site.
                      </CardText>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open(
                            "https://erikamats.github.io/Giphy/",
                            "_blank"
                          )
                        }
                      >
                        <Fa icon="clone" className="left center" /> <span className="d-sm-none d-none d-md-block">View</span>
                      </button>
               
                      
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open("https://github.com/erikamats/Giphy")
                        }
                      >
                        <Fa icon="github" className="left center" /> <span className="d-sm-none d-none d-md-block">Github</span>
                      </button>
                    </CardBody>
                  </Card>
                </div>
                <div className="card-col d-sm-block d-md-block">
                  <Card className="mb-2">
                    <CardImage
                      className="img-fluid"
                      src="https://res.cloudinary.com/matsi/image/upload/v1537200009/portfolio/Screen_Shot_2018-09-10_at_11.42.21_AM.png"
                    />
                    <CardBody>
                      <CardTitle>Daria Click Game</CardTitle>
                      <CardText className="d-none d-sm-block d-md-block">
                        Inspired by one of my favorite TV shows, this memory game breaks up the application's UI into components, manages component state and responds to user events. See
                        if you can avoid clicking the same image twice!
                      </CardText>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open("https://daria-game.now.sh/", "_blank")
                        }
                      >
                        <Fa icon="clone" className="left" /> <span className="d-sm-none d-none d-md-block">View</span>
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
                        <Fa icon="github" className="left" /> <span className="d-none d-sm-none d-md-block ">Github</span>
                      </button>
                    </CardBody>
                  </Card>
                </div>
                <div className="card-col d-sm-block d-md-block col-4">
                  <Card className="mb-2">
                    <CardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                    />
                    <CardBody>
                      <CardTitle>FreeNica</CardTitle>
                      <CardText className="d-none d-sm-block d-md-block">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content. Some quick example text to build on the card title and
                        make up the bulk of the card's content. 
                      </CardText>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open("#", "_blank")
                        }
                      >
                        <Fa icon="clone" className="left" /> <span className="d-none d-sm-none d-md-block">View</span>
                      </button>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open(
                            "#",
                            "_blank"
                          )
                        }
                      >
                        <Fa icon="github" className="left" /> <span className="d-none d-sm-none d-md-block">Github</span>
                      </button>
                    </CardBody>
                  </Card>
                </div>
                
              </CarouselItem>
              <CarouselItem itemId="2">
              <div className="card-col d-sm-block d-md-block ">
                  <Card className="mb-2">
                    <CardImage
                      className="img-fluid"
                      src="https://res.cloudinary.com/matsi/image/upload/v1536597187/portfolio/TrainSchedule.png"
                    />
                    <CardBody>
                      <CardTitle>Train Schedule</CardTitle>
                      <CardText className="d-none d-sm-block d-md-block">
                        This train schedule application incorporates Firebase to
                        host arrival and departure data. The app retrieves and
                        manipulates this information using Moment.js
                      </CardText>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open(
                            "https://erikamats.github.io/TrainActivity/",
                            "_blank"
                          )
                        }
                      >
                        <Fa icon="clone" className="left" /> <span className="d-none d-sm-none d-md-block">View</span>
                      </button>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open(
                            "https://github.com/erikamats/TrainActivity",
                            "_blank"
                          )
                        }
                      >
                        <Fa icon="github" className="left" /> <span className="d-none d-sm-none d-md-block">Github</span>
                      </button>
                    </CardBody>
                  </Card>
                </div>
                <div className="card-col d-sm-block d-md-block ">
                  <Card className="mb-2">
                    <CardImage
                      className="img-fluid"
                      src="https://res.cloudinary.com/matsi/image/upload/v1537290797/portfolio/Screen_Shot_2018-09-18_at_12.12.34_PM.png"
                    />
                    <CardBody>
                      <CardTitle>Responsive Website</CardTitle>
                      <CardText className="d-none d-sm-block d-md-block">
                        This was my first attempt creating a mobile-responsive layout soley using media queries for a dummy portfolio using HTML, CSS, GitHub and GitHub Pages.
                      </CardText>
                  
                       <button
                      className="btn btn-md "
                      onClick={() =>
                        window.open("https://erikamats.github.io/Bootstrap-Portfolio/index.html", "_blank")
                      }
                    >
                      <Fa icon="clone" className="left" /> <span className="d-none d-sm-none d-md-block">View</span>
                    </button>

               

                    <button
                      className="btn btn-md "
                      onClick={() =>
                        window.open(
                          "https://github.com/erikamats/Responsive-Portfolio",
                          "_blank"
                        )
                      }
                    >
                      <Fa icon="github" className="left" /> <span className="d-none d-sm-none d-md-block">Github</span>
                    </button>

                     
             {/* </div> */}
                    </CardBody>
                    
                  </Card>
                </div>
            <div className="card-col d-sm-block d-md-block col-4">
                  <Card className="mb-2">
                    <CardImage
                      className="img-fluid"
                      src="https://res.cloudinary.com/matsi/image/upload/v1536597188/portfolio/HonestBaby.png"
                    />
                    <CardBody>
                      <CardTitle>Honest Co. Word Guess</CardTitle>
                      <CardText className="d-none d-sm-block d-md-block">
                        Similar to hangman, guess the baby product at play
                        pressing on any letter of your choice! You lose the
                        round if you exhaust all of your 5 guesses!
                      </CardText>

                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open(
                            "https://erikamats.github.io/Word-Guess-Name/"
                          )
                        }
                      >
                        <Fa icon="clone" className="left" /> <span className="d-none d-sm-none d-md-block">View</span>
                      </button>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open(
                            "https://github.com/erikamats/Word-Guess-Name",
                            "_blank"
                          )
                        }
                      >
                        <Fa icon="github" className="left" /> <span className="d-none d-sm-none d-md-block">Github</span>
                      </button>
                    </CardBody>
                  </Card>
                </div>

                
              </CarouselItem>
              <CarouselItem itemId="3">
              <div className="card-col d-sm-block d-md-block ">
                  <Card className="mb-2">
                    <CardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                    />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText className="d-none d-sm-block d-md-block">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open("#", "_blank")
                        }
                      >
                        <Fa icon="clone" className="left" /> <span className="d-none d-sm-none d-md-block">View</span>
                      </button>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open(
                            "#",
                            "_blank"
                          )
                        }
                      >
                        <Fa icon="github" className="left" /> <span className="d-none d-sm-none d-md-block">Github</span>
                      </button>
                    </CardBody>
                  </Card>
                </div>
                <div className="card-col d-sm-block d-md-block ">
                  <Card className="mb-2">
                    <CardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                    />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText className="d-none d-sm-block d-md-block">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content. Some quick example text to build on the card title and
                        make up the bulk of the card's content. 
                      </CardText>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open("#", "_blank")
                        }
                      >
                        <Fa icon="clone" className="left" /> <span className="d-none d-sm-none d-md-block">View</span>
                      </button>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open(
                            "#",
                            "_blank"
                          )
                        }
                      >
                        <Fa icon="github" className="left" /> <span className="d-none d-sm-none d-md-block">Github</span>
                      </button>
                    </CardBody>
                  </Card>
                </div>
                <div className="card-col d-sm-block d-md-block ">
                  <Card className="mb-2">
                    <CardImage
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"
                    />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardText className="d-none d-sm-block d-md-block">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open("#", "_blank")
                        }
                      >
                        <Fa icon="clone" className="left" /> <span className="d-none d-sm-none d-md-block">View</span>
                      </button>
                      <button
                        className="btn btn-md "
                        onClick={() =>
                          window.open(
                            "#",
                            "_blank"
                          )
                        }
                      >
                        <Fa icon="github" className="left" /> <span className="d-none d-sm-none d-md-block">Github</span>
                      </button>
                    </CardBody>
                  </Card>
                </div>
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </div>
   
    );
  }
}

export default MultiCarouselPage;
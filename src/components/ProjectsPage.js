import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  // Button,
  Fa,
  Card
} from "mdbreact";

class ProjectsPage extends Component {
  render() {
    return (
      <Container>
        <section className="text-center ">
          <h2 className="h1-responsive font-weight-bold my-5">My Work</h2>
          {/* <p className="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p> */}
          <Row>
            <Col md="12" className="mb-4">
              <Card
                className="card-image"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/matsi/image/upload/v1536597187/portfolio/Giphy.png)"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                  <h6 className="work-text">
                      <Fa icon="plane" />
                      <strong> API Request</strong>
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                      <strong> Get To Know Me</strong>
                    </h3>
                    <p className="pb-3">
                      Click on the preset buttons to see fun Gifs that describe
                      who I am! It's a fun little project that I enjoyed very
                      much. Feel free to add a new Gif category to call on.{" "}
                    </p>
                   
                  </div>
                </div>
              </Card>
            </Col>

            <Col md="6" className="md-0 mb-4">
              <Card
                className="card-image"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/matsi/image/upload/v1536597765/portfolio/Screen_Shot_2018-09-10_at_11.41.42_AM.png)"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                  <h5 className="work-text">
                      <Fa icon="pie-chart" />
                      <strong> Simple React</strong>
                    </h5>
                    <h3 className="py-3 font-weight-bold">
                      <strong>Daria Click Game</strong>
                    </h3>
                    <p className="pb-3">
                      With use of React, this game keeps track of the score and
                      updates it as the user clicks on a new image that has not
                      been clicked before. The game ends when the same card has
                      been clicked twice!
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
              </Card>
            </Col>
            <Col md="6" className="md-0 mb-4">
              <Card
                className="card-image"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/matsi/image/upload/ar_16:9,c_fill,g_auto,e_sharpen/v1536597188/portfolio/HonestBaby.png)"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                  <h5 className="work-text">
                      <Fa icon="eye" />
                      <strong> Javascript</strong>
                    </h5>
                    <h3 className="py-3 font-weight-bold">
                      <strong>Honest Co. Product Word Guess</strong>
                    </h3>
                    <p className="pb-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat fugiat, laboriosam, voluptatem, optio vero odio
                      nam sit officia accusamus minus error nisi architecto
                      nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <button
                      className="btn btn-md "
                      onClick={() =>
                        window.open(
                          "https://erikamats.github.io/Word-Guess-Name/"
                        )
                      }
                    >
                      <Fa icon="clone" className="left" /> View project
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
                      <Fa icon="github" className="left" /> View Github
                    </button>
                  </div>
                </div>
              </Card>
            </Col>

            <Col md="12" className="mb-4">
              <Card
                className="card-image"
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/matsi/image/upload/v1536597187/portfolio/TrainSchedule.png)"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h5 className="work-text">
                      <Fa icon="pie-chart" />
                      <strong> Javascript</strong>
                    </h5>
                    <h3 className="py-3 font-weight-bold">
                      <strong>Train Schedule</strong>
                    </h3>
                    <p className="pb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                    </p>
                    <button
                      className="btn btn-md "
                      onClick={() =>
                        window.open(
                          "https://erikamats.github.io/TrainActivity/",
                          "_blank"
                        )
                      }
                    >
                      <Fa icon="clone" className="left" /> View project
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
                      <Fa icon="github" className="left" /> View Github
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default ProjectsPage;

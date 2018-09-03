import React from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGithub
} from "react-icons/fa";
import Menu from "../components/Menu";

class Work extends React.Component {
  render() {
    return (
      <div id="main-work">
        <Menu />

        <div id="main_content">
          <Row className="center">
            <Col s={12} m={6} l={4} className="center">
              <Card
                onClick={() =>
                  window.open("https://erikamats.github.io/Giphy/", "_blank")
                }
                header={<CardTitle image={require("../images/Giphy.png")} />}
              >
                Giphy API Request &nbsp; <FaJsSquare className="valign" />
              </Card>
            </Col>

            <Col s={12} m={6} l={4}
            className="allcards">
              <Card
                onClick={() =>
                  window.open(
                    "https://erikamats.github.io/TrainActivity/",
                    "_blank"
                  )
                }
                header={
                  <CardTitle image={require("../images/TrainSchedule.png")} />
                }
              >
                Train Schedule
              </Card>
            </Col>

            <Col s={12} m={6} l={4}
            className="allcards">
              <Card
                onClick={() =>
                  window.open("https://daria-game.now.sh/", "_blank")
                }
                header={<CardTitle image={require("../images/Daria.png")} />}
              >
                Daria Themed - Click Game &nbsp; <FaReact className="valign" />
              </Card>
            </Col>
          </Row>

          <Row>
            <h3 className="h3">Experience:</h3>
            <div className="languages">
              <div className="fabexp ">
                <FaHtml5 className="html5 exp" />
              </div>

              <div className="fabexp ">
                <FaCss3 className="javasxcript exp" />
              </div>

              <div className="fabexp ">
                <FaJsSquare className="javasxcript exp" />
              </div>

              <div className="fabexp ">
                <FaNodeJs className="javasxcript exp" />
              </div>

              <div className="fabexp ">
                <FaReact className="javasxcript exp" />
              </div>

              <div className="fabexp">
                <FaGithub className="javasxcript exp" />
              </div>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}
export default Work;

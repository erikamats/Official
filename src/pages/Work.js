import React from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { FaJsSquare, FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import Menu from "../components/Menu";

class Work extends React.Component {
  render() {
    return (
      <div id="main-work">
        <Menu />

        <div id="main_content">

          <Row className="center">
            <Col s={12} m={6} l={4}>
              <Card
                onClick={() =>
                  window.open("https://erikamats.github.io/Giphy/", "_blank")
                }
                header={<CardTitle image={require("../images/Giphy.png")} />}
              >
                Giphy API Request &nbsp; <FaJsSquare className="valign" />
              </Card>
            </Col>

            <Col s={12} m={6} l={4}>
              <Card
                onClick={() =>
                  window.open(
                    "https://erikamats.github.io/TrainActivity/",
                    "_blank")
                }
                header={
                  <CardTitle image={require("../images/TrainSchedule.png")} />
                }
        >
                Train Schedule
              </Card>
            </Col>

            <Col s={12} m={6} l={4}>
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
            <h3>Experience:</h3>
            <div className="languages social">
              <div className="fab html">
                <FaHtml5 className="html5 exp" />
              </div>

              <div className="fab html">
                <FaJsSquare className="javasxcript exp" />
              </div>

              <div className="fab html">
                <FaCss3 className="javasxcript exp" />
              </div>

              <div className="fab html">
                <FaNodeJs className="javasxcript exp" />
              </div>

              <div className="fab html">
                <FaReact className="javasxcript exp" />
              </div>

              {/* <div className="fab html">
                <FaNodeJs className="javasxcript exp" />
              </div> */}
            </div>
          </Row>

        </div>
      </div>
    );
  }
}
export default Work;

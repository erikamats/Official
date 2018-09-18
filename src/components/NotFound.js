import React from "react";
import { Link } from "react-router-dom";
import { Button} from "react-materialize";

const NotFound = () => (
    <div className="not-found">
        <h3 className="center">
           Uh Oh! Sorry that page does not exist!
        </h3>
        <Link to="/">
        <Button> Let's go back home, instead! </Button>
        </Link>

    </div>

);

export default NotFound

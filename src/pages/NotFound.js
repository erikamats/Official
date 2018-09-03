import React from "react";
// import { Row, Input } from "react-materialize";

import { Link } from "react-router-dom";
import { Button} from "react-materialize";

const NotFound = () => (
    <div className="not-found">
        <h3 className="sacramento center">
           Uh Oh! Sorry that page does not exist!
        </h3>
        <Link to="/">
        <Button> Let's go back home, instead! </Button>
        </Link>

    </div>

);

export default NotFound

// class PokemonForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "coconut" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("Your favorite flavor is: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select
//             className="browser-default"
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <option value="1">
//               Bulbasaur{" "}
//               <div
//                 className="dropdownImage"
//                 image={require("../images/Daria.png")}
//               />
//             </option>
//             <option value="2">Ivysaur</option>
//             <option value="3">Venasaur</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default PokemonForm;



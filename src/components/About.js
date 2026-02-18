import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          <UserContext.Consumer>
            {(data) => <h2 className="font-bold">{data.loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        <h2>This in Food ordering app about us page</h2>
        <UserClass name="First" location="Bhubaneswar" />
      </div>
    );
  }
}

export default About;

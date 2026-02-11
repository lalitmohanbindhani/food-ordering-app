import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "sbdjvskvojsrvo",
      },
    };

    console.log("Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/lalitmohanbindhani");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log("Render");
    return (
      <div className="user">
        <img src={avatar_url} />
        <h3>Name : {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: bindhanilalitmohan@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

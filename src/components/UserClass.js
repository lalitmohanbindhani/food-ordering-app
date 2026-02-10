import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h3>Name : {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: bindhanilalitmohan@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

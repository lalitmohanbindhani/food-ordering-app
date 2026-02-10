import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h3>Name : {name}</h3>
      <h4>Location: {location}</h4>
      <h4>Contact: bindhanilalitmohan@gmail.com</h4>
    </div>
  );
};

export default User;

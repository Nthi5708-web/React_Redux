// class component
// functional component

import React from "react";
class Mycomponent extends React.Component {
  state = {
    name: "Thu Trang",
    address: "Đak Lak",
    age: 20,
  };

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm form {this.state.address}
      </div>
    );
  }
}
// xu
export default Mycomponent;

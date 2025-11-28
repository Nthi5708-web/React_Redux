// class component
// functional component

import React from "react";
class Mycomponent extends React.Component {
  state = {
    name: "Thu Trang",
    // address: "Đak Lak",
    // age: 20,
  };

  handleClick = (event) => {
    console.log(">>> Click me");

    this.setState({
      name: "Đình Thi",
    });
    this.setState({
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm form {this.state.age}
        <button onMouseOver={this.handleOnMouseOver}>hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
// xu
export default Mycomponent;

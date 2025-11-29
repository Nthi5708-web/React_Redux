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
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }

  handlOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handlOnSubmit = (event) => {
    event.preventDefault();
    console.log(">>> Check data on submit: ", this.state);
  };
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm form {this.state.age}
        <form onSubmit={(event) => this.handlOnSubmit(event)}>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handlOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
// xu
export default Mycomponent;

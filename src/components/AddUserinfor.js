import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "Trang Cute",
    // address: "Đak Lak",
    age: 20,
  };
  handlOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handlOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handlOnSubmit = (event) => {
    event.preventDefault();
    // console.log(">>> Check data input: ", this.state);
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm form {this.state.age}
        <form onSubmit={(event) => this.handlOnSubmit(event)}>
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handlOnChangeInput(event)}
          />

          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handlOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddUserInfor;

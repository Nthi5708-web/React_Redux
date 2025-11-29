// class component
// functional component

import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./Displayinfor";
class Mycomponent extends React.Component {
  state = {
    listUssers: [
      { id: 1, name: "Trang", age: 18 },
      { id: 2, name: "Thi", age: 21 },
      { id: 3, name: "Minh", age: 69 },
    ],
  };
  // JSX
  render() {
    // tao bien
    // DRY: dont repeat yourself
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUssers={this.state.listUssers} />
      </div>
    );
  }
}
// xu
export default Mycomponent;

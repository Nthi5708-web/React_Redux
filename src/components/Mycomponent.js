// class component
// functional component

import React from "react";
import AddUserInfor from "./AddUserinfor";
import DisplayInfor from "./Displayinfor";
class Mycomponent extends React.Component {
  state = {
    listUssers: [
      { id: 1, name: "Trang", age: 18 },
      { id: 2, name: "Thi", age: 21 },
      { id: 3, name: "Minh", age: 69 },
    ],
  };

  handleAddNewUser = (userobj) => {
    // console.log(">>> check data from parent: ", userobj);
    // cách code 1:
    this.setState({
      // toán tử spread ... (mở rộng)
      listUssers: [...this.state.listUssers, userobj],
    });

    // // cách code 2: khuyến khích dùng cách 1
    // let listUsserClone = [...this.state.listUssers];
    // listUsserClone.unshift(userobj);
    // this.setState({
    //   listUssers: listUsserClone,
    // });
  };
  // JSX
  render() {
    // tao bien
    // DRY: dont repeat yourself
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor listUssers={this.state.listUssers} />
      </div>
    );
  }
}
// xu
export default Mycomponent;

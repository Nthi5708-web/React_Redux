import React from "react";

class DisplayInfor extends React.Component {
  render() {
    // destructuring array/object
    const { listUssers } = this.props; //object
    console.log(listUssers);
    // props => viết tắt properties
    console.log(this.props);
    // trả về giao diện
    return (
      <div>
        {listUssers.map((user, index) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My age's {user.age}</div>
              <hr />
            </div>
          );
        })}
        {/* <div>My name's {name}</div>
        <div>My age's {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfor;

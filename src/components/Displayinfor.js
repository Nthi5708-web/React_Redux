import React from "react";

class DisplayInfor extends React.Component {
  // câp nhật state
  state = {
    isShowListUser: true,
  };

  // phương thức ẩn hiện danh sách
  handleShowHide = () => {
    this.setState({
      // đảo ngược giá trị boolean
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // destructuring array/object
    const { listUssers } = this.props; //object
    console.log(listUssers);
    // props => viết tắt properties
    console.log(this.props);
    // console.table(listUssers);
    // trả về giao diện

    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list user"
              : "Show list user"}
          </span>
        </div>

        {this.state.isShowListUser && (
          <div>
            {listUssers.map((user, index) => {
              return (
                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;

import React, { Component } from "react";
import Table from "./common/table";
import auth from "../services/authService";
import Link from "react-router-dom/Link";

class UsersTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: (user) => <Link to={`/users/${user.id}`}>{user.name}</Link>,
    },
    {
      path: "username",
      label: "Username",
    },
    {
      path: "email",
      label: "Email",
    },
  ];

  deleteColumn = () => {
    const user = auth.getCurrentUser();
    console.log(user);
    if (user && user.isAdmin) {
      this.columns.push({
        key: "delete",
        content: (user) => (
          <button
            onClick={() => {
              this.props.onDelete(user);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        ),
      });
    }
  };

  componentDidMount() {
    this.deleteColumn();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <Table columns={this.columns} data={users} />
      </div>
    );
  }
}

export default UsersTable;

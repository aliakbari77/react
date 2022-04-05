import React, { Component } from "react";
import user from "../services/userService";
import UsersTable from "./usersTable";
import http from "../services/httpService";
import config from "../config.json";
import { toast, ToastContainer } from "react-toastify";

class Users extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    const { data: users } = await user.getAllUsers();
    this.setState({ users });
  }

  handleDelete = async (user) => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter((u) => u.id !== user.id);
    this.setState({ users });

    try {
      await http.delete(config.apiUser + "/" + user.id);
      toast.success("Delete User Successfully.");
    } catch (ex) {
      console.log(ex);
    }
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <ToastContainer />
        <UsersTable users={users} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default Users;

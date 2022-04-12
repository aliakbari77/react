import React, { Component } from "react";
import Form from "./common/form";
import http from "../services/httpService";
import config from "../config.json";
import Joi from "joi-browser";
import { ToastContainer, toast } from "react-toastify";

class UserForm extends Form {
  state = {
    data: {
      name: "",
      username: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().min(5).required().label("Name"),
    username: Joi.string().min(3).required().label("Username"),
    email: Joi.string().email().required().label("Email"),
  };

  async componentDidMount() {
    const userId = this.props.match.params.id;
    const { data: userInfo } = await http.get(config.apiUser + "/" + userId);
    const data = {
      name: userInfo.name,
      username: userInfo.username,
      email: userInfo.email,
    };
    console.log(data);
    this.setState({ data });
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await http.post(config.apiUser + "/" + data);
      toast.success("Edit User Successfully.");
    } catch (ex) {}
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>User Form</h1>
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email")}
          {this.renderButton("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default UserForm;

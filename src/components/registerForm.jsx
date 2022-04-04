import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { username, password, name } = data;
      const result = await userService.register(username, password, name);
      auth.loginWithJwt(result.headers["x-auth-token"]);
      window.location = "/";
      console.log(result);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;

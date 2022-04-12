import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import { Redirect } from "react-router-dom";
import RegisterForm from "./components/registerForm";
import auth from "./services/authService";
import Logout from "./components/logout";
import Users from "./components/Users";
import Profile from "./components/profile";
import UserForm from "./components/userForm";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar user={user} />
        <div className="container p-3">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/users/:id" component={UserForm} />
            <Route path="/profile" component={Profile} />
            <Route path="/customers" component={Users} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route
              path="/movies"
              exact
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
            <Redirect from="/" to="/movies" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

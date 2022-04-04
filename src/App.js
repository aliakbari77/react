import React, { Component } from "react";
import NavBar from "./components/navBar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Movie from "./components/movie";
import { Redirect } from "react-router-dom";
import RegisterForm from "./components/registerForm";
import auth from "./services/authService";
import Logout from "./components/logout";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

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
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movie" exact component={Movie} />
            <Redirect from="/" to="/movie" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

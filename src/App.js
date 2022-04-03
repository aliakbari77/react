import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navBar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Movie from "./components/movie";
import { Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container p-3">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/movie" exact component={Movie} />
            <Redirect from="/" to="/movie" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

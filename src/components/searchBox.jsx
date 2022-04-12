import React, { Component } from "react";
import Input from "./common/input";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <Input placeholder="Search..." />
      </div>
    );
  }
}

export default SearchBox;

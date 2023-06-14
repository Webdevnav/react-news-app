import React, { Component } from "react";
import loading from "./loader.gif.gif";

export class Loader extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container text-center">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Loader;

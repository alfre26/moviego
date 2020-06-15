import React, { Component, Fragment } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Layouts extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        {this.props.children}
        <Footer />
      </Fragment>
    );
  }
}

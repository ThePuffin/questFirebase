import React, { Component } from "react";

import Inscription from "./Inscription";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>        
        <h2>or don't be affraid and sign in !</h2>
        <Inscription />
      </div>
    );
  }
}

export default Intro;

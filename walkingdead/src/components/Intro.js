import React, { Component } from 'react';
import gif from "../gif/giphy.gif";

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return <div>
            <img src={gif} className="giphy" alt="head" />
            <p className="App-intro">Don't be affraid and register !</p>
          </div>;
    }
}

export default Intro;
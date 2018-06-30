import React, { Component } from "react";
import gif from "./gif/giphy.gif";

import "./App.css";
import Intro from "./components/Intro";
import Perso from "./components/Perso";
import Connexion from "./components/Connexion";

import config from "./configuration";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    config.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user")
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <img
            src="https://small-games.info/s/l/t/the_walking_dead_episode_1_1.png"
            alt="logo"
          />
        ) : (
          <header>
            <img
              src="https://vignette.wikia.nocookie.net/fictionalcrossover/images/a/a0/A_walking_dead_logo.png/revision/latest?cb=20141207034016"
              alt="walking"
            />
          </header>
        )}
        {this.state.user ? (
          <Perso user={this.state.user} />
        ) : (
          <div>
            <Connexion />

            <img src={gif} className="giphy" alt="head" />
            <Intro />
          </div>
        )}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import gif from "./gif/giphy.gif";

import "./App.css";
import Intro from "./components/Intro";
import Perso from "./components/Perso";
import Connexion from "./components/Connexion";
import Logo from "./gif/log.png";
import { configuration } from "./configuration";
import Grid from "@material-ui/core/Grid";

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
    configuration.auth().onAuthStateChanged(user => {
    
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
        {this.state.user ?   (
          <header>
            <img
              src={Logo}
              alt="walking"
            />
          </header>
        ) : (
            <img
              src="https://small-games.info/s/l/t/the_walking_dead_episode_1_1.png"
              alt="logo"
            />
          )}
        {this.state.user ? (
          <Perso user={this.state.user} />
        ) : (
          <Grid container>
              <Grid item style={{ textAlign: "center" }} spacing={16} sm={6} xs={12}>
              <Connexion />
            </Grid>
              <Grid item style={{ textAlign: "center" }} spacing={16} sm={6} xs={12}>
              <Intro />
            </Grid>
            <Grid item style={{ textAlign: "center" }} xs={12}>
              <img src={gif} className="giphy" alt="head" />
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

export default App;

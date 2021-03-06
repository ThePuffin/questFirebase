import React, { Component } from "react";

//import config firebase
import { configuration } from "../configuration";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Add from "./Add";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class Perso extends Component {
  constructor(props) {
    super(props);

    this.state = {
      create: false,
      arrPerso: [],
      user: ""
    };
    this.logout = this.logout.bind(this);
    this.createOff = this.createOff.bind(this);
    this.create = this.create.bind(this);
    this.recharger = this.recharger.bind(this);
  }

  create(e) {
    e.preventDefault();
    this.setState({ create: !this.state.create });
  }

  logout(e) {
    configuration.auth().signOut();
  }

  createOff() {
    this.setState({ create: false });
    this.recharger();
  }

  componentWillMount() {
    this.recharger();
  }

  recharger() {
    const persoRef = configuration.database().ref("/");

    persoRef.on("value", snapshot => {
      let persos = snapshot.val().Perso;
      let persoKeys = Object.values(persos);
      this.setState({
        arrPerso: persoKeys
      });
    });
  }
  render() {
    //  console.log(this.props.user.email);

    return (
      <div style={{ padding: 20 }}>
        <Grid style={{ padding: 40 }}>
        {this.state.create===true?  <Button variant="contained" color="secondary" onClick={this.create}>
            Close
          </Button>:
          <Button variant="contained" color="secondary" onClick={this.create}>
            Create a new character
          </Button>
        }
        </Grid>

        {this.state.create === false ? null : (
          <Grid container style={{ textAlign: "center" }}>
            {" "}
            <Add createOff={this.createOff} user={this.props.user.email} />
          </Grid>
        )}

        <Grid container spacing={24}>
          {this.state.arrPerso.length > 0 && this.props.user.email !== null ? (
            this.state.arrPerso
              .filter(
                elt =>
                  elt.access === "all" || elt.access === this.props.user.email
              )
              .map(elt => (
                <Grid item style={{ textAlign: "center" }} spacing={16} sm={6} xs={12}>
                  <Paper>
                    <p style={{ padding: 1 }}> </p>
                    <CardMedia
                      style={{ width: "auto", height: "50vh" }}
                      title="walking"
                      image={elt.img}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h3"
                      >
                        {elt.name.toUpperCase()}
                      </Typography>
                    </CardContent>
                  </Paper>
                </Grid>
              ))
          ) : (
            <Grid item style={{ textAlign: "center" }} xs={12}>
              <p>Loading in progress...</p>
              <img
                src="https://media.giphy.com/media/CTkk4VzNdmZMI/giphy.gif"
                alt="loader"
              />
            </Grid>
          )}
        </Grid>
        <Grid style={{ padding: 40 }}>
          <Button variant="contained" color="primary" onClick={this.logout}>
            Log out
          </Button>
        </Grid>
      </div>
    );
  }
}

export default Perso;

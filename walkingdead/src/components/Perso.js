import React, { Component } from "react";

//import config firebase
import { configuration } from "../configuration";

//import card
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import Add from "./Add";

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
    // console.log("rechargement données");
    const persoRef = configuration.database().ref("/");

    persoRef.on("value", snapshot => {
      let persos = snapshot.val().Perso;
      // console.log("new data", snapshot.val());
      let persoKeys = Object.values(persos);
      // console.log(persoKeys);
      this.setState({
        arrPerso: persoKeys
      });
    });
  }
  render() {
  //  console.log(this.props.user.email);

    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.logout}>
          Log out
        </Button>
        <Button variant="contained" color="secondary" onClick={this.create}>
          Create a new character
        </Button>
        {this.state.create === false ? null : (
          <Add createOff={this.createOff} user={this.props.user.email} />
        )}
        {this.state.arrPerso.length > 0 && this.props.user.email !== null ? (
          this.state.arrPerso
            .filter(
              elt =>
                elt.access === "all" || elt.access === this.props.user.email
            )
            .map(elt => (
              <Card>
                <CardMedia img="">
                  <img alt="walking" src={elt.img} />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {elt.name}
                  </Typography>
                </CardContent>
              </Card>
            ))
        ) : (
          <div>
            <p>Loading in progress...</p>
            <img
              src="https://media.giphy.com/media/CTkk4VzNdmZMI/giphy.gif"
              alt="loader"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Perso;

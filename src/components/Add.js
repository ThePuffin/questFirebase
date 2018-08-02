import React, { Component } from "react";
import {
  Button,
  InputLabel,
  FormControl,
  Input,
  FormHelperText
} from "@material-ui/core";
import { base } from "../configuration";
import SwitchBtn from "./SwitchBtn";
import Grid from "@material-ui/core/Grid";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      access: this.props.user
    };
    this.regexes = {
      name: `^.{3,40}$`,
      img: `(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|png)`
    };

    this.hidden = {
      name: true,
      img: true
    };

    this.onChange = this.onChange.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  onChange = e => {
    e.preventDefault();
    const idChange = e.target.id;

    //on met à jour le state quand on entre des données
    this.setState({ [idChange]: e.target.value });

    const regex = new RegExp(this.regexes[idChange], "i");
    regex.test(e.target.value)
      ? (this.hidden[idChange] = true)
      : (this.hidden[idChange] = false);
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, img, access } = this.state;
    //on ajoute le personnage à la liste
    base.push(`Perso`, {
      data: {
        name,
        img,
        access
      }
    });

    //on fait disparaitre le composant
    this.props.createOff();
  };

  handleSwitch() {
    this.state.access === "all"
      ? this.setState({ access: this.props.user })
      : this.setState({ access: "all" });
  }

  render() {
    return (
      <Grid
        container
        spacing={16}
        style={{ padding: 20, textAlign: "center" }}
        xs={12}
      >
        <Grid item sm={5} xs={12}>
          <FormControl fullWidth>
            <InputLabel
              style={{
                color: "black",
                fontSize: "20",
                fontWeight: "bolder",
                backgroundColor: "rgba(255,255,255,0.4)"
              }}
              className="textInscription"
            >
              Name
            </InputLabel>
            <Input
              style={{
                color: "black",
                fontSize: "20",
                fontWeight: "bolder",
                backgroundColor: "rgba(255,255,255,0.4)"
              }}
              error={!this.hidden.name}
              id="name"
              onChange={this.onChange}
              value={this.state.name}
            />
            <FormHelperText
              style={{
                color: "black",
                fontSize: "20",
                fontWeight: "bolder",
                backgroundColor: "rgba(255,255,255,0.4)"
              }}
              hidden={this.hidden.name}
              id="nom-error-text"
            >
              Too short.
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item sm={2} xs={12}>
          <FormControl>
            <SwitchBtn handleSwitch={this.handleSwitch} />
          </FormControl>
        </Grid>

        <Grid item sm={5} xs={12}>
          <FormControl fullWidth>
            <InputLabel
              style={{
                color: "black",
                fontSize: "20",
                fontWeight: "bolder",
                backgroundColor: "rgba(255,255,255,0.4)"
              }}
              htmlFor="inputInscriptionPassword"
            >
              Image link
            </InputLabel>
            <Input
              style={{
                color: "black",
                fontSize: "20",
                fontWeight: "bolder",
                backgroundColor: "rgba(255,255,255,0.4)"
              }}
              error={!this.hidden.img}
              id="img"
              type="text"
              onChange={this.onChange}
              value={this.state.img}
            />
            <FormHelperText
              style={{
                color: "black",
                fontSize: "20",
                fontWeight: "bolder",
                backgroundColor: "rgba(255,255,255,0.4)"
              }}
              hidden={this.hidden.img}
              id="nom-error-text"
            >
              Wrong link.
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item style={{ padding: 20, textAlign: "center" }} xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            margin="normal"
            onClick={this.onSubmit}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Add;

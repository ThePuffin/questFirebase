import React, { Component } from "react";
import { Button, InputLabel, FormControl, Input } from "@material-ui/core";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "",
      access: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    e.preventDefault();
    const idChange = e.target.id;

    //on met à jour le state quand on entre des données
    this.setState({ [idChange]: e.target.value, access: this.props.user });
  };

  onSubmit = e =>{
      e.preventDefault();
      console.log("object");
      this.props.createOff();

  }

  render() {
    //   console.log("state:", this.state);
    //   console.log(this.state.access)

    return (
      <div style={{ padding: 20 }}>
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
            id="name"
            onChange={this.onChange}
            value={this.state.name}
          />
        </FormControl>

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
            id="img"
            type="text"
            onChange={this.onChange}
            value={this.state.img}
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          margin="normal"
          onClick={this.onSubmit}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default Add;

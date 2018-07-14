import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class SwitchBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility : true
    };
  }

  handleChange = () => {
    this.setState({visibility: !this.state.visibility})
    this.props.handleSwitch();
  };
  render() {
    return <div>
        <FormGroup style={{ color: "black", fontSize: "20", fontWeight: "bolder", backgroundColor: "rgba(255,255,255,0.4)", borderRadius: 25 }}>
          <FormControlLabel control={<Switch onClick={this.handleChange} />} label={this.state.visibility === false ? "For everyone" : "Just for me"} />
        </FormGroup>
      </div>;
  }
}

export default SwitchBtn;

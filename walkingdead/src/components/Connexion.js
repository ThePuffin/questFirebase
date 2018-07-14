import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  InputLabel,
  FormControl,
  Input,
  FormHelperText,
  InputAdornment,
  IconButton
} from "@material-ui/core";

//import pour les icones
import MailOutline from "@material-ui/icons/MailOutline";
import LockOutline from "@material-ui/icons/LockOutline";
// //import pour la visibilité password
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import firebase from "firebase";

//import snackbar
import Snackbar from "@material-ui/core/Snackbar";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPasswordOne: false,
      open: false
    };
    this.soumission = false;

    //définition des regex
    this.regexes = {
      email: `^.{3,40}$`,
      password: `^.{6,40}$`
    };

    //definition des visibilités des erreurs
    this.hidden = {
      email: true,
      password: true
    };

    //bind pour que la fonction comprenne le this
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        this.setState({ open: true });
      });
  }

  handleChange = e => {
    e.preventDefault();
    const idChange = e.target.id;

    //on met à jour le state quand on entre des données
    this.setState({ [idChange]: e.target.value });

    //on teste le champ entré si faux message formhelper apparait
    const regex = new RegExp(this.regexes[idChange], "i");
    // console.log(regex, [this.state.password]);

    regex.test(e.target.value)
      ? (this.hidden[idChange] = true)
      : (this.hidden[idChange] = false);
  };
  //afficher la visibilité ou non des passwords
  handleClickShowPassword = mdpValue => {
    // console.log(this.state[mdpValue]);
    this.setState({ [mdpValue]: !this.state[mdpValue] });
  };
  //eviter une action lors du changement d'état de la visibilité password
  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const stateArray = Object.values(this.state);
    const hiddenArray = Object.values(this.hidden);
    return (
      <div>
        <h2>Log in...</h2>
        <br/>
        <form>
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
                Ton email
              </InputLabel>
              <Input
                error={!this.hidden.email}
                style={{
                  color: "black",
                  fontSize: "20",
                  fontWeight: "bolder",
                  backgroundColor: "rgba(255,255,255,0.4)"
                }}
                id="email"
                onChange={this.handleChange}
                value={this.state.email}
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutline style={{ fontSize: 19 }} />
                  </InputAdornment>
                }
              />
              <FormHelperText
                style={{
                  color: "black",
                  fontSize: "20",
                  fontWeight: "bolder",
                  backgroundColor: "rgba(255,255,255,0.4)"
                }}
                hidden={this.hidden.email}
                id="nom-error-text"
              >
                Le email est trop court.
              </FormHelperText>
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
                Ton mot de passe
              </InputLabel>
              <Input
                error={!this.hidden.password}
                style={{
                  color: "black",
                  fontSize: "20",
                  fontWeight: "bolder",
                  backgroundColor: "rgba(255,255,255,0.4)"
                }}
                id="password"
                type={this.state.showPasswordOne ? "text" : "password"}
                onChange={this.handleChange}
                value={this.state.password}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutline style={{ fontSize: 19 }} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={() =>
                        this.handleClickShowPassword("showPasswordOne")
                      }
                      onMouseDown={this.handleMouseDownPassword}
                    >
                      {this.state.showPasswordOne ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText
                style={{
                  color: "black",
                  fontSize: "20",
                  fontWeight: "bolder",
                  backgroundColor: "rgba(255,255,255,0.4)"
                }}
                hidden={this.hidden.password}
                id="password-error-text"
              >
                Le mot de passe n'est pas valide car trop court.
              </FormHelperText>
            </FormControl>
           <br/>

            {stateArray.includes("") || hiddenArray.includes(false)
              ? (this.soumission = true)
              : (this.soumission = false)}
            <Button
              style={{ marginTop: 20 }}
              disabled={this.soumission}
              type="submit"
              variant="contained"
              color="primary"
              margin="normal"
              onClick={this.login}
            >
              Je me connecte
            </Button>
          </div>
        </form>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          ContentProps={{ "aria-describedby": "message-id" }}
          message={
            <span id="message-id">
              Wrong information ! Do you sign in before?
            </span>
          }
        />
      </div>
    );
  }
}

export default withStyles(styles)(Connexion);

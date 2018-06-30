//   componentDidMount() {
//     /* Create reference to messages in Firebase Database */
//     let personnagesRef = configuration.database().ref("/");
//     console.log(personnagesRef);

//       personnagesRef.on("child_added", snapshot => {
//           this.setState({ loaded: true });
//           const data = { ...snapshot.val(), ...{ id: snapshot.key } };
//           this.setState({
//               arrPerso: [...this.state.arrPerso, ...[data]]
//           });
//       });
//       console.log(this.state.arrPerso);

//   }

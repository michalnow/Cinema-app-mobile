import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";

import firebase from "../config/firebase";

class UserScreen extends Component {
  constructor() {
    super();
    this.state = {
      reservations: null,
      curUserUid: firebase.auth().currentUser.uid,
      movies: null
    };
  }

  componentDidMount() {
    const reservs = [];
    firebase
      .firestore()
      .collection("reservations")
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot);
        querySnapshot.docs.forEach(doc => {
          reservs.push(doc.data());
        });
        this.setState({ reservations: reservs });
        console.log(this.state.reservations[0].userSeats);
        const markers = [];
        firebase
          .firestore()
          .collection("films")
          .get()
          .then(querySnapshot => {
            console.log(querySnapshot);
            querySnapshot.docs.forEach(doc => {
              markers.push(doc.data());
            });
            this.setState({ movie: markers });
            console.log(this.state.movie);
          });
      });
  }

  render() {
    console.log(this.state.curUserUid);
    return (
      <View style={{ alignSelf: "stretch" }}>
        {this.state.reservations != null
          ? this.state.reservations.map(reserv => {
              this.state.curUserUid === reserv.userUid ? (
                <Text>{reserv.movieID}</Text>
              ) : null;
            })
          : null}
      </View>
    );
  }
}

export default UserScreen;

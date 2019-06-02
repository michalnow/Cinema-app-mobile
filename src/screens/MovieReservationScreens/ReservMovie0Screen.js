import React, { Component } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";

import firebase from "../../config/firebase";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

class ReservMovie0Screen extends Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      seatsBooked: [],
      userSeats: [],
      seanceDate: "",
      movieID: "",
      hall_movieId: "",
      userUid: ""
    };
  }

  componentDidMount() {
    console.log(state.firebase);
    firebase
      .firestore()
      .collection("films")
      .doc("3kcL0X0CsYnKxSWSoQgl")
      .get()
      .then(doc => this.setState({ movie: doc.data() }));

    axios.get("http://51.15.102.229:5000/api/seans/10").then(res => {
      const movie = res.data;
      this.setState({ hall_movieId: movie[0].hall_movieID });
      this.setState({ seanceDate: movie[0].seanceDate });
      this.setState({ movieID: movie[0].movieID });
      this.setState({ seanceDate: movie[0].seanceDate });

      axios.get("http://51.15.102.229:5000/api/seatbooked/10").then(res => {
        const seats = res.data;

        this.setState({ seatsBooked: seats });
      });
    });
  }

  render() {
    return (
      <View
        style={{
          marginTop: 20,
          marginLeft: 5,
          marginRight: 5
        }}
      >
        <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text>1</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text>2</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text>3</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text>4</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text>5</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text>6</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text>7</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text>8</Text>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text>9</Text>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text>10</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default withNavigation(ReservMovie0Screen);

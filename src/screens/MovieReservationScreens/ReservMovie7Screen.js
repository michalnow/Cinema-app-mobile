import React, { Component } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";

import firebase from "../../config/firebase";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

class ReservMovie7Screen extends Component {
  constructor() {
    super();
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("films")
      .doc("e5NhQ4BO3h3Su9BnbFZG")
      .get()
      .then(doc => this.setState({ movie: doc.data() }));
  }

  render() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}
export default withNavigation(ReservMovie7Screen);

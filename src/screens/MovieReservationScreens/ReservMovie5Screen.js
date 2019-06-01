import React, { Component } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";

import firebase from "../../config/firebase";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

class ReservMovie5Screen extends Component {
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
      .doc("XY7oD07I8SyVq1pBoMeL")
      .get()
      .then(doc => this.setState({ movie: doc.data() }));
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}
export default withNavigation(ReservMovie5Screen);

import React, { Component } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";

import firebase from "../../config/firebase";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

class ReservMovie1Screen extends Component {
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
      .doc("8NwHSy2rpQWQPIeGBVyv")
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
export default withNavigation(ReservMovie1Screen);

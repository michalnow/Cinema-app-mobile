import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> LoginScreen </Text>
        <Text style={styles.text} onPress={() => navigate("Home")}>
          CLICK
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

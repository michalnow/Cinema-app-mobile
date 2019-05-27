import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Login from "../components/Login";

export default class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#7070EF" />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/cinema.svg.png")}
          />
        </View>
        <Login />
        <View style={styles.formContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate("Home")}
          >
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Text
            style={{ color: "blue", textAlign: "center" }}
            onPress={() => navigate("SignUp")}
          >
            Dont't have account ? Click here to registry.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 2,
    justifyContent: "center"
  },
  logo: {
    width: "auto",
    height: "auto"
  },
  buttonContainer: {
    backgroundColor: "#7070EF",
    paddingVertical: 15,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 12,
    padding: 90
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20
  }
});

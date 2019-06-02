import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from "react-native";
import Login from "../components/Login";

export default class LoginScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log(navigate);
    return (
      <ImageBackground style={styles.container} source={require("../images/back.jpg")}>
        <StatusBar backgroundColor="#7070EF" />
        <View style={styles.logoContainer}>
        </View>
        <Login />
        {/* <View style={styles.formContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate("Home")}
          >
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={() => navigate("SignUp")}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Dont't have account ? Click here to registry.
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 40
  },
  logo: {
    width: 200,
    height: 100
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

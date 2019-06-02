import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import SignUpForm from "../components/SignUpForm";

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#7070EF" barStyle="light-content" />
        <View style={styles.logoContainer} />
        <View style={styles.formContainer}>
          <SignUpForm />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 40
  },
  formContainer: {
    alignItems: "center",
    flexGrow: 4,
    justifyContent: "center",
    marginBottom: 25
  },
  logo: {
    width: 200,
    height: 100
  },
  buttonContainer: {
    backgroundColor: "#0051a5",
    paddingVertical: 15,
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 12,
    padding: 100
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 15
  }
});

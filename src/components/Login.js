import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import firebase from "../config/firebase";
import { provider, auth } from "../config/firebase"

class Login extends Component {
  constructor() {
    super();
    state = {
      email: "",
      password: "",
      user: "",
      clicked: false

    };
  }

  loginWithFB = () => {
    firebase.auth().signInWithPopup(provider)
      .then(({ user }) => {
        console.log("eloelo")
        this.setState({ user: user })
        console.log( this.state.user.displayName)
        firebase
      .firestore()
      .collection("users").add(({
        username: this.state.user.displayName
      }))
      })
  }

  Login = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          this.props.navigation.navigate("Home");
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={StyleSheet.container}>
        <TextInput
          placeholder="email"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="email-address"
          style={styles.input}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          style={styles.input}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.Login(this.state.email, this.state.password)}
        >
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.loginWithFB()}
        >
          <Text style={styles.buttonText}> Login with Facebook </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 50,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
    color: "black",
    paddingHorizontal: 10
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

export default withNavigation(Login);

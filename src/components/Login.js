import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

class Login extends Component {
  constructor() {
    super();
    state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        <TextInput
          placeholder="username"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="email-address"
          style={styles.input}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={username => this.setState({ username })}
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
  }
});

export default Login;

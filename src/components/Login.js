import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import firebase from "../config/firebase";
import { provider, auth } from "../config/firebase"
import FBSDK, { LoginManager, AccessToken } from "react-native-fbsdk";

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

  fbAuth = () => {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          alert("Login cancelled");
        } else {
            AccessToken.getCurrentAccessToken().then((accessTokenData) => {
              const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
              firebase.auth().signInWithCredential(credential).then((result) => {
                //promise was succes
                console.log("Logged in")
                
              }, (error) => {
                //promise was rejected
                consol.log(error)
              })
            }, (error => {
              consol.log('Some error occured: ' + error)
            }))
        }
      },

      function(error) {
        alert("Login fail with error: " + error);
        console.log("Login fail with error: " + error)
      }
    );
    this.props.navigation.navigate("Home");
  }



  Login = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
        });
      } catch (error) {
        console.log(error);
      }
      this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={StyleSheet.container}>
        <Image
          style={{ marginLeft: 10, marginBottom:10}}
          source={require("../images/cinema1.png")}
        />
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
          style={styles.fbbuttonContainer}
          onPress={() => this.fbAuth()}
        >
          <Icon name="logo-facebook" color="white"/>    
          <Text style={styles.fbbuttonText}>Login with Facebook</Text>
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

  fbbuttonContainer: {
    backgroundColor: "#3b5998",
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
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
  },
  fbbuttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 10
  }
});

export default withNavigation(Login);

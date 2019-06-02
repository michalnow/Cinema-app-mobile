import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";

import firebase from "../config/firebase";

class UserScreen extends Component {
  constructor() {
    super();
    this.state = {
      reservations: null,
      curUserUid: firebase.auth().currentUser.uid,
      movies: null
    };
  }

  componentDidMount() {
    const reservs = [];
    firebase
      .firestore()
      .collection("reservations")
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot);
        querySnapshot.docs.forEach(doc => {
          reservs.push(doc.data());
        });
        this.setState({ reservations: reservs });
        console.log(this.state.reservations[0].userSeats);
        const markers = [];
        firebase
          .firestore()
          .collection("films")
          .get()
          .then(querySnapshot => {
            console.log(querySnapshot);
            querySnapshot.docs.forEach(doc => {
              markers.push(doc.data());
            });
            this.setState({ movies: markers });
            console.log(this.state.movies);
          });
      });
  }

  render() {
    console.log(this.state.curUserUid);

    return (
      <ScrollView>
        <View style={{ alignSelf: "stretch" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
              color: "black"
            }}
          >
            Your reservations:
          </Text>
          <View>
            {this.state.movies == null ? (
              <ActivityIndicator
                style={{
                  marginBottom: 50,
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  padding: 180
                }}
                size="large"
                color="#0000ff"
              />
            ) : (
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  {this.state.movies[0].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[0].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  row: 1 ; seat: 10
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  row: 1 ; seat: 9
                </Text>
              </View>
            )}
          </View>

          <View>
            {this.state.movies == null ? (
              <ActivityIndicator
                style={{
                  marginBottom: 50,
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  padding: 180
                }}
                size="large"
                color="#0000ff"
              />
            ) : (
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  {this.state.movies[3].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[3].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  row: 9 ; seat: 4
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  row: 9 ; seat: 3
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  row: 9 ; seat: 5
                </Text>
              </View>
            )}
          </View>

          <View>
            {this.state.movies == null ? (
              <ActivityIndicator
                style={{
                  marginBottom: 50,
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  padding: 180
                }}
                size="large"
                color="#0000ff"
              />
            ) : (
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  {this.state.movies[7].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[7].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  row: 5 ; seat: 6
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  row: 5 ; seat: 5
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  row: 5 ; seat: 4
                </Text>

                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "black"
                  }}
                >
                  row: 5 ; seat: 3
                </Text>
              </View>
            )}
          </View>
          {this.state.reservations != null
            ? this.state.reservations.map(reserv => {
                this.state.curUserUid === reserv.userUid ? (
                  <Text>{reserv.movieID}</Text>
                ) : null;
              })
            : null}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#0051a5",
            paddingVertical: 15,
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 50,
            marginRight: 50,
            borderWidth: 0,
            borderColor: "transparent",
            borderRadius: 12,
            padding: 20
          }}
          onPress={() => this.props.navigation.navigate("Movies")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 5
            }}
          >
            Back to movie list
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default withNavigation(UserScreen);

import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView
} from "react-native";

import firebase from "../../config/firebase";
import { withNavigation } from "react-navigation";

import axios from "axios";
import Orientation from "react-native-orientation";

class ReservMovie9Screen extends Component {
  constructor() {
    super();
    this.state = {
      movie: null,
      seatsBooked: [],
      userSeats: [],
      seanceDate: "",
      movieID: "",
      hall_movieId: "",
      userUid: "",
      backgroundColor: "grey"
    };
  }

  componentDidMount() {
    Orientation.lockToLandscape();
    console.log(state.firebase);
    firebase
      .firestore()
      .collection("films")
      .doc("wRX6YIPtlYyWVTc72iB8")
      .get()
      .then(doc => this.setState({ movie: doc.data() }));

    axios.get("http://51.15.102.229:5000/api/seans/8").then(res => {
      const movie = res.data;
      this.setState({ hall_movieId: movie[0].hall_movieID });
      this.setState({ seanceDate: movie[0].seanceDate });
      this.setState({ movieID: movie[0].movieID });
      this.setState({ seanceDate: movie[0].seanceDate });

      axios.get("http://51.15.102.229:5000/api/seatbooked/8").then(res => {
        const seats = res.data;

        this.setState({ seatsBooked: seats });
      });
    });
  }

  onclick = e => {
  let array = this.state.userSeats;
  this.setState({backgroundColor:"green"});

    /* if (array.includes(e.target.attributes.name.nodeValue.substring(1))) {
      array.splice(
        array.indexOf(e.target.attributes.name.nodeValue.substring(1)),
        1
      );
    }
    console.log(e.target.attributes.name.nodeValue);
    if (e.target.style.backgroundColor === "rgb(0, 255, 0)") {
      this.setState(
        [e.target.name]: (e.target.style.backgroundColor = "")
      });
    } else {
      array.push(String(e.target.attributes.name.nodeValue).substring(1));
      this.setState({
        [e.target.name]: (e.target.style.backgroundColor = "#00FF00"),
        userSeats: array.sort()
      });
    }*/
  };

  render() {
    return (
      <ScrollView
        style={{
          marginTop: 2,
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 20
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Order tickets for The Prestige
        </Text>
        {this.state.seatsBooked === null ? (
          <ActivityIndicator
            style={{
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
          <View>
            {[...Array(5)].map((x, i) => (
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  flexDirection: "row",
                  marginTop: 10,
                  marginRight :60,
                  marginLeft:60
                }}
              >
                {[...Array(10)].map((x, no) => (
                  <View
                    style={{
                      flex: 1,
                      alignSelf: "stretch",
                      marginRight: 2
                    }}
                    name={Number(`${i + 1}${no + 1}`)}
                    
                  >
                    {this.state.seatsBooked.includes(
                      Number(String(i + 1) + String(no + 1))
                    ) ? (
                      <Text
                        style={{
                          fontWeight: "bold",
                          backgroundColor:"red",
                          textAlign: "center",
                          fontSize: 20
                        }}
                        name={Number(`${i + 1}${no + 1}`)}
                      >
                        {no + 1}
                        
                      </Text>
                    ) : (
                      <View
                        style={{
                          flex: 1,
                          alignSelf: "stretch",
                          marginRight: 2
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            backgroundColor: this.state.backgroundColor,
                            textAlign: "center",
                            fontSize: 20
                          }}
                          name={"a" + Number(`${i + 1}${no + 1}`)}
                          onPress={this.onclick}
                        >
                          {no + 1}
                        </Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {this.state.seatsBooked === null ? (
          <ActivityIndicator
            style={{
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
          <View>
            {[...Array(4)].map((x, i) => (
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                  flexDirection: "row",
                  marginTop: 10
                }}
              >
                {[...Array(15)].map((x, no) => (
                  <View
                    style={{
                      flex: 1,
                      alignSelf: "stretch",
                      marginRight: 2
                    }}
                  >
                    {this.state.seatsBooked.includes(
                      Number(String(i + 6) + String(no + 1))
                    ) ? (
                      <Text
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "red",
                          textAlign: "center",
                          fontSize: 20
                        }}
                        name={Number(`${i + 6}${no + 1}`)}
                      >
                        {no + 1}
                      </Text>
                    ) : (
                      <View
                        style={{
                          flex: 1,
                          alignSelf: "stretch",
                          marginRight: 2
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            backgroundColor: this.state.backgroundColor,
                            textAlign: "center",
                            fontSize: 20
                          }}
                          name={"a" + Number(`${i + 6}${no + 1}`)}
                          onPress={this.onclick}
                        >
                          {no + 1}
                        </Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}
                <TouchableOpacity
          style={{
            backgroundColor: "#7070EF",
            paddingVertical: 15,
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 200,
            marginRight: 200,
            borderWidth: 0,
            borderColor: "transparent",
            borderRadius: 12
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
export default withNavigation(ReservMovie9Screen);



import React, { Component } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";

import firebase from "../../config/firebase";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

class AvMovie6Screen extends Component {
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
      .doc("dUYymFVuKeL1PoZscond")
      .get()
      .then(doc => this.setState({ movie: doc.data() }));
  }

  render() {
    return (
      <View>
        {this.state.movie == null ? (
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
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 25, color:"black" }}
            >
              {this.state.movie.title}
            </Text>
            <Image
              source={{ uri: this.state.movie.image }}
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
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 25, color:"black" }}
            >
              Choose seance date:{" "}
            </Text>
            {this.state.movie.seance.map(sean => {
              return (
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
                  
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold"
                    }}
                    onPress={() => this.props.navigation.navigate("Movie6Rs")}
                  >
                    {" "}
                    {sean.seanceDate}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    );
  }
}
export default withNavigation(AvMovie6Screen);

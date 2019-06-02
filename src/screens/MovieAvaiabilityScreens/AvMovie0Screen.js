import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

import firebase from "../../config/firebase";
import { withNavigation } from "react-navigation";

class AvMovie0Screen extends Component {
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
      .doc("3kcL0X0CsYnKxSWSoQgl")
      .get()
      .then(doc => this.setState({ movie: doc.data() }));
  }

  render() {
    return (
      <View style={{backgroundColor:"#F5F5F5"}}>
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
              borderColor: "#0051A5"
            }}
          >
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
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
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
            >
              Choose seance date:{" "}
            </Text>
            {this.state.movie.seance.map(sean => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: "#7070EF",
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
                  onPress={() => this.props.navigation.navigate("Movie0Rs")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold"
                    }}
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
export default withNavigation(AvMovie0Screen);

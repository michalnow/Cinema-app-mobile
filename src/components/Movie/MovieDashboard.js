import React, { Component } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import firebase from "../../config/firebase";
import { getTheme } from "react-native-material-kit";
import Dialog, {
  DialogContent,
  SlideAnimation,
  DialogTitle
} from "react-native-popup-dialog";
import { Button } from "react-native-elements";

class MovieDashboard extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      visible: false,
      movieId: null,
      uids: null
    };
  }

  componentDidMount() {
    const markers = [];
    const uids2 = [];
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
        this.setState({ uids: uids2 });
      });
  }

  render() {
    const theme = getTheme();

    return (
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
        <ScrollView style={{ marginBottom: 5 }}>
          {this.state.movies == null ? null : (
            <View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
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
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[0].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[0].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[0].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[0].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.movies[1].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[1].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[1].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[1].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[1].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[1].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.movies[2].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[2].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[2].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[2].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[2].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[2].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
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
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[3].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[3].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[3].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[3].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.movies[1].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[4].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[4].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[4].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[4].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[4].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.movies[5].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[5].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[5].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[5].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[5].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[5].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.movies[6].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[6].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[6].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[6].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[6].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[6].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
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
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[7].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[7].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[7].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[7].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.movies[8].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[8].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[8].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[8].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[8].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[8].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
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
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  {this.state.movies[9].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[9].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text style={{ textAlign: "center" }}>
                  Genre: {this.state.movies[9].type}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Plot: {this.state.movies[9].plot}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Director: {this.state.movies[9].director}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Actors: {this.state.movies[9].actors}
                </Text>
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
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie Avaiability
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

export default MovieDashboard;

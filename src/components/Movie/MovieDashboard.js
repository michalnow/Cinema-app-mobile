import React, { Component } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import firebase from "../../config/firebase";
import { getTheme } from "react-native-material-kit";
import Dialog, {
  DialogContent,
  SlideAnimation,
  DialogTitle
} from "react-native-popup-dialog";

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
        // console.log(this.state.movies[0]);
        /// console.log(this.state.movies[0].uid);
      });
  }

  render() {
    const theme = getTheme();

    return (
      <View>
        <ScrollView style={{ marginBottom: 5 }}>
          {this.state.movies == null
            ? null
            : this.state.movies.map(movie => {
                return (
                  <View key={movie.movieApiId}>
                    {console.log(
                      movie.trailerURL.substring(
                        movie.trailerURL.indexOf("=") + 1
                      )
                    )}
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
                      <Image
                        source={{ uri: movie.image }}
                        style={{
                          width: 200,
                          height: 280,
                          alignContent: "center",
                          justifyContent: "center",
                          marginTop: 2,
                          borderRadius: 10
                        }}
                      />
                      <View>
                        <Dialog
                          visible={this.state.visible}
                          dialogAnimation={
                            new SlideAnimation({
                              slideFrom: "bottom"
                            })
                          }
                          dialogTitle={<DialogTitle title={movie.title} />}
                          onTouchOutside={() => {
                            this.setState({ visible: false });
                          }}
                          style={{ backgroundColor: "transparent" }}
                        >
                          <DialogContent
                            style={{ backgroundColor: "transparent" }}
                          >
                            <Text style={{ textAlign: "center" }}>
                              Director: {movie.director}
                            </Text>
                            <Text style={{ textAlign: "center" }}>
                              Actors: {movie.actors}
                            </Text>
                            <Text style={{ textAlign: "center" }}>
                              Duration: {movie.duration} min
                            </Text>
                            <Text style={{ textAlign: "center" }}>
                              Type: {movie.type}
                            </Text>
                            <Image
                              source={{ uri: movie.image }}
                              style={{
                                width: 200,
                                height: 280,
                                alignContent: "center",
                                justifyContent: "center",
                                marginTop: 2,
                                borderRadius: 10,
                                marginLeft: 17
                              }}
                            />
                            <TouchableOpacity
                              style={{
                                alignItems: "center",
                                backgroundColor: "#DDDDDD",
                                padding: 10,
                                marginBottom: 2,
                                borderRadius: 20,
                                backgroundColor: "#0051A5",
                                marginTop: 5
                              }}
                            >
                              <Text
                                style={{ color: "white", fontWeight: "bold" }}
                              >
                                Avaiability
                              </Text>
                            </TouchableOpacity>
                          </DialogContent>
                        </Dialog>
                      </View>

                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        {movie.title} ({movie.Year})
                      </Text>
                      <Text style={{ textAlign: "center" }}>{movie.plot}</Text>
                      <TouchableOpacity
                        style={{
                          alignItems: "center",
                          backgroundColor: "#DDDDDD",
                          padding: 10,
                          marginBottom: 2,
                          borderRadius: 20,
                          backgroundColor: "#0051A5"
                        }}
                        onPress={() => {
                          this.setState({ visible: true });
                        }}
                      >
                        <Text style={{ color: "white" }}>Movie details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
        </ScrollView>
      </View>
    );
  }
}

export default MovieDashboard;

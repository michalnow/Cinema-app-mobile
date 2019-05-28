import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import firebase from "../../config/firebase";
import { getTheme } from "react-native-material-kit";

class MovieDashboard extends Component {
  constructor() {
    super();
    this.state = {
      movies: null
    };
  }

  componentDidMount() {
    const markers = [];
    firebase
      .firestore()
      .collection("films")
      .get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          markers.push(doc.data());
        });
        this.setState({ movies: markers });
        console.log(this.state.movies[0].title);
      });
  }

  render() {
    const theme = getTheme();
    return (
      <View>
        <ScrollView>
          {this.state.movies == null
            ? null
            : this.state.movies.map(movie => {
                return (
                  <View>
                    <View style={theme.cardStyle}>
                      <Image
                        source={{ uri: movie.image }}
                        style={theme.cardImageStyle}
                      />
                      <Text style={theme.cardTitleStyle}>
                        {movie.title} ({movie.Year})
                      </Text>
                      <Text style={theme.cardContentStyle}>{movie.plot}</Text>
                      <View style={theme.cardMenuStyle} />
                      <Text style={theme.cardActionStyle}>My Action</Text>
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

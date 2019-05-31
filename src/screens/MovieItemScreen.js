import React, { Component } from "react";
import { Text, View } from "react-native";
import MovieItem from "../components/Movie/MovieItem";

class MovieScreen extends Component {
  render() {
    return (
      <View>
        <MovieItem />
      </View>
    );
  }
}

export default MovieScreen;
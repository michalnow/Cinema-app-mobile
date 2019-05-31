import React, { Component } from "react";
import { Text, View } from "react-native";
import MovieDashboard from "../components/Movie/MovieDashboard";

class MovieScreen extends Component {
  render() {
    return (
      <View>
        <MovieDashboard />
      </View>
    );
  }
}

export default MovieScreen;

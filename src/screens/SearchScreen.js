import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "../config/firebase";

export default class SearchScreen extends Component {
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
    return (
      <View>
        <Text> {console.log(this.state.movies)} </Text>
      </View>
    );
  }
}

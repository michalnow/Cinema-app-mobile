import React, { Component } from "react";
import firebase from "../config/firebase";
import { Text, View, Image, ActivityIndicator, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import { Divider, Button, Card, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";

class HomeMovies extends Component {
  state = {
    movie: null
  };

  componentDidMount() {
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
        this.setState({ movie: markers });
        console.log(this.state.movie);
      });
  }

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ marginTop: 10 }}
          source={require("../images/cinema1.png")}
        />
        <Text
          style={{
            marginTop: 15,
            fontSize: 40,
            fontWeight: "bold",
            color: "black"
          }}
        >
          Recently added
        </Text>

        {this.state.movie == null ? (
          <ActivityIndicator
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              justifyContent: "space-around"
            }}
            size="large"
            color="#0000ff"
          />
        ) : (
          <ScrollView>
            <Card>
              <Card.Title title={this.state.movie[0].title} />
              <Card.Cover source={{ uri: this.state.movie[0].image }} />
              <Card.Content>
                <Paragraph>{this.state.movie[0].plot}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() => this.props.navigation.navigate("Movie0Av")}
                >
                  Movie info
                </Button>
              </Card.Actions>
              <Divider />
              <Card.Title title={this.state.movie[1].title} />
              <Card.Cover source={{ uri: this.state.movie[1].image }} />
              <Card.Content>
                <Paragraph>{this.state.movie[1].plot}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() => this.props.navigation.navigate("Movie1Av")}
                >
                  Movie info
                </Button>
              </Card.Actions>
              <Divider />
              <Card.Title title={this.state.movie[2].title} />
              <Card.Cover source={{ uri: this.state.movie[2].image }} />
              <Card.Content>
                <Paragraph>{this.state.movie[2].plot}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() => this.props.navigation.navigate("Movie2Av")}
                >
                  Movie info
                </Button>
              </Card.Actions>
            </Card>
          </ScrollView>
        )}
      </View>
    );
  }
}

export default withNavigation(HomeMovies);

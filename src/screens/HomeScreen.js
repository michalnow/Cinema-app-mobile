import React, { Component } from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import MovieScreen from "./MovieScreen";
import UserScreen from "./UserScreen";
import SearchScreen from "./SearchScreen";
import HomeMovies from "./HomeMovies";

class HomeScreen extends Component {
  render() {
    return <HomeMovies />;
  }
}

export default createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: <Text style={{ fontSize: 13 }}>Home</Text>,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-home" color={tintColor} size={20} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: <Text style={{ fontSize: 13 }}>Search</Text>,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-search" color={tintColor} size={20} />
        )
      }
    },
    Movies: {
      screen: MovieScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: <Text style={{ fontSize: 13 }}>Movies</Text>,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-film" color={tintColor} size={20} />
        )
      }
    },
    Profile: {
      screen: UserScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: <Text style={{ fontSize: 13 }}>Profile</Text>,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-contact" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    activeTintColor: "#74b9ff",
    tabBarPosition: "bottom",
    shifting: true,
    tabBarOptions: {
      activeTintColor: "#74b9ff",
      inactiveTintColor: "#e6e6fa",
      style: {
        backgroundColor: "transparent"
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
  }
);

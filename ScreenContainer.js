import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";

const NavigationStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigatinOptions: {
        headerVisible: false,
        header: null
      }
    },
    Home: {
      screen: HomeScreen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    }
  },
  { headerMode: "none" }
);

const Container = createAppContainer(NavigationStack);

export default Container;

import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from './src/screens/SignUpScreen';
import MovieItemScreen from './src/screens/MovieItemScreen';

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
    },
    SignUp: {
      screen: SignUpScreen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    MovieItem: {
      screen: MovieItemScreen,
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

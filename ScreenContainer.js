import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import AvMovie0Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie0Screen";
import AvMovie1Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie1Screen";
import AvMovie2Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie2Screen";
import AvMovie3Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie3Screen";
import AvMovie4Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie4Screen";
import AvMovie5Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie5Screen";
import AvMovie6Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie6Screen";
import AvMovie7Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie7Screen";
import AvMovie8Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie8Screen";
import AvMovie9Screen from "./src/screens/MovieAvaiabilityScreens/AvMovie9Screen";

import ReservMovie0Screen from "./src/screens/MovieReservationScreens/ReservMovie0Screen";
import ReservMovie1Screen from "./src/screens/MovieReservationScreens/ReservMovie1Screen";
import ReservMovie2Screen from "./src/screens/MovieReservationScreens/ReservMovie2Screen";
import ReservMovie3Screen from "./src/screens/MovieReservationScreens/ReservMovie3Screen";
import ReservMovie4Screen from "./src/screens/MovieReservationScreens/ReservMovie4Screen";
import ReservMovie5Screen from "./src/screens/MovieReservationScreens/ReservMovie5Screen";
import ReservMovie6Screen from "./src/screens/MovieReservationScreens/ReservMovie6Screen";
import ReservMovie7Screen from "./src/screens/MovieReservationScreens/ReservMovie7Screen";
import ReservMovie8Screen from "./src/screens/MovieReservationScreens/ReservMovie8Screen";
import ReservMovie9Screen from "./src/screens/MovieReservationScreens/ReservMovie9Screen";

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
    Movie0Av: {
      screen: AvMovie0Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie1Av: {
      screen: AvMovie1Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie2Av: {
      screen: AvMovie2Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie3Av: {
      screen: AvMovie3Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie4Av: {
      screen: AvMovie4Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie5Av: {
      screen: AvMovie5Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie6Av: {
      screen: AvMovie6Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie7Av: {
      screen: AvMovie7Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie8Av: {
      screen: AvMovie8Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie9Av: {
      screen: AvMovie9Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie0Rs: {
      screen: ReservMovie0Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie1Rs: {
      screen: ReservMovie1Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie2Rs: {
      screen: ReservMovie2Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie3Rs: {
      screen: ReservMovie3Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie4Rs: {
      screen: ReservMovie4Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie5Rs: {
      screen: ReservMovie5Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie6Rs: {
      screen: ReservMovie6Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie7Rs: {
      screen: ReservMovie7Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie8Rs: {
      screen: ReservMovie8Screen,
      navigatinOptions: {
        header: null,
        headerVisible: false
      }
    },
    Movie9Rs: {
      screen: ReservMovie9Screen,
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

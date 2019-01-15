import { createStackNavigator, createAppContainer } from "react-navigation";

// Component

import CoffeeList from "../CoffeeList/index";
import CoffeeDetail from "../CoffeeDetail/index";
import CoffeeCart from "../CoffeeCart/index";
import Login from "../Login/index";

const Navigation = createStackNavigator(
  {
    List: CoffeeList,
    Detail: CoffeeDetail,
    Cart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

const Container = createAppContainer(Navigation);

export default Container;

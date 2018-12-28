import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderStatusScreen from "./screens/OrderStatusScreen";
import AdminScreen from "./screens/AdminScreen";



const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Home: HomeScreen,
    Order: OrderScreen,
    Payment: PaymentScreen,
    OrderStatus: OrderStatusScreen,
    Admin: AdminScreen
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}

/**
 * React Native Reservation App
 *
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import ViewAllScreen from './screens/ViewAllScreen';
import ByIdScreen from './screens/ByIdScreen';
import { ApolloProvider } from "react-apollo";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Create: {
      screen: CreateScreen
    },
    ViewAll: {
      screen: ViewAllScreen,
    },
    ById: {
      screen: ByIdScreen,
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />
  }  
}

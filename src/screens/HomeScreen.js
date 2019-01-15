/**
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/Button';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  onCreateReservationPress = () => {
    return this.props.navigation.navigate('Create');
  };

  onViewAllReservationsPress = () => {
    return this.props.navigation.navigate('ViewAll');
  };

  onGetByIdReservationsPress = () => {
    return this.props.navigation.navigate('ById');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Theo's Reservation App</Text>
              <Button onPress={this.onCreateReservationPress}>Create</Button>
              <Button onPress={this.onViewAllReservationsPress}>View All</Button>
              <Button onPress={this.onGetByIdReservationsPress}>Get by Id</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', 
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

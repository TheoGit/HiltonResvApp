/**
 * @flow
 */

import React from 'react';
import {Alert, View, Text, TextInput, StyleSheet } from 'react-native';
import {Button} from '../components/Button';
import {ReservationRow} from '../components/ResvRow';
import {getReservationsById} from '../utils/fetchData';

export default class ByIdScreen extends React.Component {
    static navigationOptions = {
      title: 'Retrieve Reservation',
    };

    constructor(props){
      super(props)
    
      this.state = {
          showRow: false,
          reservation: {},
          hotelId: '',
        }
    }
            
    onTextChanged = (text) => {
      let id = text.replace(/[^0-9]/g, '');
      if (id === '') { 
        Alert.alert('Reservations', 'please enter numeric value')
      } else {
        this.setState({hotelId: id});
      };
    };

    onGetPress = () => {
      getReservationsById(this.state.hotelId).then((resvById) => {
        this.setState({ reservation: resvById.resvById });
        console.log(`state value reservations: ${this.state.reservation}`);
        this.setState({showRow: true});
      });  
    };

    renderRow = () => {
      return (
          <ReservationRow resv={this.state.reservation} index={0} />
      );
    };
   
    render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {!this.state.showRow ? (
          <View>
              <View style={styles.inputContainer}>
                <Text style={styles.textLabel}>Hotel Id:</Text>
                <TextInput maxLength={3} keyboardType='numeric' style={styles.textInput} placeholder="id" 
                    onChangeText={(text)=> this.onTextChanged(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Button onPress={this.onGetPress}>Get</Button>
              </View>
          </View>
          ) : ( 
          this.renderRow()
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  textLabel: {
    width: 80,
  },
  textInput: {
    width: 30,
    borderWidth: 1,
    borderColor: 'black'
  },
});

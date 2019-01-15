/**
 * @flow
 */

import React from 'react';
import {Alert, View, StyleSheet, TextInput, Text } from 'react-native';
import {Button} from '../components/Button';
import {createReservation} from '../utils/fetchData';

export default class CreateScreen extends React.Component {
    static navigationOptions = {
        title: 'Create Reservation',
    };

    constructor(props){
        super(props)
    
        this.state = {
          showRow: false,
          guestName: '',
          hotel: '',
          arrivalDate: '',
          departureDate: '',
          hotelId: ''
        }
    }
    
    onSavePress = () => {
        const {guestName, hotel, arrivalDate, departureDate} = this.state;
      
        createReservation(guestName, hotel, arrivalDate, departureDate).then((resv) => {
            this.setState({ hotelId: resv.addReservation.id });
            console.log(`state value id: ${this.state.hotelId}`);
            this.setState({showRow: true});
        });      
    };

    renderRow = (id) => {
        return (
            <View style={styles.rowContainer}>
                <Text>Reservation created; please note hotel id: {this.state.hotelId}</Text>
            </View>
          );
    };
      
    render() {
    
    return (
      <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.textLabel}>Guest Name:</Text>
                <TextInput style={styles.input} maxLength={55} placeholder="Guest Name"
                    onChangeText={(text) => this.setState({guestName:text})}/>
                <Text style={styles.textLabel}>Hotel:</Text>
                <TextInput style={styles.input} placeholder="Hotel" 
                    onChangeText={(text) => this.setState({hotel:text})}/>                
                <Text style={styles.textLabel}>Arrival Date:</Text>
                <TextInput style={styles.input} placeholder="Mon-DD-YYYY" 
                    onChangeText={(text) => this.setState({arrivalDate:text})}/>
                <Text style={styles.textLabel}>Departure Date:</Text>
                <TextInput style={styles.input} placeholder="Mon-DD-YYYY" 
                    onChangeText={(text) => this.setState({departureDate:text})}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={this.onSavePress} buttonOff={this.state.showRow}>Save</Button>
            </View>
            {this.state.showRow && this.renderRow()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop:  35,
        marginLeft: 5,
        marginRight: 5,
    },
    textLabel: {
        width: '40%',
        marginTop: 5
    },
    input: {
        height: 25,
        width: "60%",
        borderWidth: .5,
    },
    rowContainer: {
        width: '95%',
        backgroundColor: 'lightblue',
        marginTop: 50,
        borderTopWidth: .5,
        borderTopColor: 'black',
    },
});
  

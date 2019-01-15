import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ReservationRow = (resv, index) => {
    const {name, hotel, arrivalDate, departureDate} = resv.resv;
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={styles.leftBuffer}>Guest: {name}</Text>
                <Text style={styles.rightBuffer}>Property: {hotel}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.leftBuffer}>Arriving: {arrivalDate}</Text>
                <Text style={styles.rightBuffer}>Departing: {departureDate}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '93%',
        backgroundColor: 'lightblue',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftBuffer: {
        marginLeft: 5,
    },
    rightBuffer: {
        marginRight: 10,
    },
  });
  
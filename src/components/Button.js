import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const Button = ({onPress, buttonOff = false, children}) => {
    return (
        <TouchableOpacity disabled={buttonOff} onPress={onPress} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>
                    {children}
                </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#F5FCFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        hieght: '10%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#104c97',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
}

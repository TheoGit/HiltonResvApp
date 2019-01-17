/* @flow */

import React from 'react';
import {Alert, StyleSheet, FlatList, View, Text } from 'react-native';
import {Button} from '../components/Button';
import {ReservationRow} from '../components/ResvRow';
import {getAllReservations, getAllReservationsGraphQl} from '../utils/fetchData';
import {hiltonReservations} from './ReservationTypes';
type Props = {};
type State = {
  showList: boolean,
  reservations: hiltonReservations[],
};

type RenderItemType = {
  item: hiltonReservations,
  index: number,
};

export default class ViewAllScreen extends React.PureComponent<Props, State> {
    static navigationOptions = {
      title: 'View All Reservations',
    };

    constructor(){
      super();

      this.state = {
        showList: false,
        reservations: []
      }
    }

    renderItem = ({index, item}: {index: number, item: *}) => {
      return (
          <ReservationRow resv={item} index={index} />
      );
    };
    
    keyExtractor = (item: hiltonReservations) => item.id.toString();

    flatListItemSeparator = () => {
      return (
        <View style={styles.itemSeparator}/>
      )
    };

    onGetAllResvPress = async () => {
      getAllReservationsGraphQl().then((resv) => {
        this.setState({ reservations: resv.resv });
        this.setState({showList: true});
      });  
    };

    render() {
      const {showList, reservations} = this.state;
      return (
        <View style={styles.container}>
          {!showList ? (
            <Button onPress={this.onGetAllResvPress}>Get All Reservations</Button>
          ) : (
            <View style={styles.listContainer}>
                <FlatList
                      data={reservations}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}
                      ItemSeparatorComponent={this.flatListItemSeparator}
                />
            </View>
          )}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  listContainer: {
      flex: 1,
      marginTop: 50,
      width: '95%',
      marginLeft: 5,
      marginRight: 5,
    },
  itemSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: "#104c97",
  },
});

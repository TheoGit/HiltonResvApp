/**
 * @flow
 */

import React from 'react';
import {Alert, StyleSheet, FlatList, View, Text } from 'react-native';
import {Button} from '../components/Button';
import {ReservationRow} from '../components/ResvRow';
import {getAllReservations, getAllReservationsGraphQl} from '../utils/fetchData';

export default class ViewAllScreen extends React.PureComponent {
    static navigationOptions = {
      title: 'View All Reservations',
    };

    constructor(props){
      super(props)
  
      this.state = {
        showList: false,
        reservations: [],
      }
    }

    renderItem = ({item, index}) => {
      return (
          <ReservationRow resv={item} index={index} />
      );
    };
    
    keyExtractor = (item) => item.id.toString();

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
      const {showList} = this.state.showList;
      return (
        <View style={styles.container}>
          {!this.state.showList ? (
            <Button onPress={this.onGetAllResvPress}>Get All Reservations</Button>
          ) : (
            <View style={styles.listContainer}>
                <FlatList
                      data={this.state.reservations}
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

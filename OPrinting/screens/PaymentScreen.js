import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
//import { Container, Text, Button } from "native-base";



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text>Payment Screen</Text>
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('OrderStatus')} title="Pay" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      textAlignVertical: 'top',
    },
    button: {
      flexDirection: 'row'  
    }
  });
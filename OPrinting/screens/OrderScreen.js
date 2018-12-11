import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class OrderScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text>Order</Text>
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Payment')} title="Pay Now" />
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

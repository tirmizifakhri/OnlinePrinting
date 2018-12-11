import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default class App extends Component {
  render() {
    return (
       <View style={styles.container}>
           <Text>Sign up screen</Text>
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
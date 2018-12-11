import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default class App extends Component {
  render() {
    return (
       <View style={styles.container}>
           <View>
           <Text>Login screen</Text>
           </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Sign In" />
        <Button onPress={() => this.props.navigation.navigate('Admin')} title="Sign In (Admin)" />
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
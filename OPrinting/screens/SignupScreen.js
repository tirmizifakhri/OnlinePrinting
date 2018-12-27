import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";


export default class App extends Component {
  render() {
    return (
       <View style={styles.container}>
           <Text>REGISTER</Text>
           <View>
             <TextInput placeholder="Enter your email address" onChangetext={(email) => this.setState({email})}>Email:</TextInput>
             <TextInput placeholder="Enter your password" onChangetext={(password) => this.setState({password})}>Password:</TextInput>
             <TextInput placeholder="Confirm password" onChangeText={(password2) => this.setState({password2})}>Confirm password:</TextInput>
           </View>
           <View>
             <Button onPress={() => this.props.navigation.navigate('Home')} title="Sign Up"/>
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
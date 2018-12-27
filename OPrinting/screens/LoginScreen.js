import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      password2: ''
    }
  }
  render() {
    return (
       <View style={styles.container}>
           <View style={styles.title}>
           <Text>ONLINE PRINTING</Text>
           </View>
           <TextInput placeholder="Email" onChangeText={(email) => this.setState({email})}  />
           <TextInput placeholder="Password" onChangeText={(password) => this.setState({password})}  />
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Log In" />
        <Button onPress={() => this.props.navigation.navigate('Admin')} title="Log In (Admin)" />
        </View>
        <View>
        <Button onPress={() => this.props.navigation.navigate('Signup')} title="Sign Up" />
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
    title: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    button: {
      flexDirection: 'row'  
    }
  });
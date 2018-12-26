import React, { Component } from "react";
// import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from "native-base";


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
      <Container>
        <Header>
          <Text style={styles.header}>LOGIN</Text>
        </Header>
        <Content>
          <Form>
          <TextInput placeholder="Email" onChangeText={(email) => this.setState({email})}  />
          <TextInput placeholder="Password" onChangeText={(password) => this.setState({password})}  />
            {/* <Item floatinglabel>
            <Label>Username</Label>
            <Input />
            </Item> */}
            {/* <Item floatinglabel last>
            <Label>Password</Label>
            <Input />
            </Item> */}
          </Form>
          <View style={styles.button}>
            <Button onPress={() => this.props.navigation.navigate('Home')} title="Log In" />
            <Button onPress={() => this.props.navigation.navigate('Admin')} title="Log In (Admin)" />
            <Button onPress={() => this.props.navigation.navigate('Signup')} title="Sign Up" />
          </View>
        </Content>
      </Container>
      //  <View style={styles.container}>
      //      <View style={styles.title}>
      //      <Text>ONLINE PRINTING</Text>
      //      </View>
           
        
        
      //   </View>
      //  </View>
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
      flexDirection: 'column'  
    },
    header:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#eff5ff',
      marginTop: 5
    }
  });
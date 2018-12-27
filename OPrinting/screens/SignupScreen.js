import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Container, Content, Header, Form, Button } from 'native-base';
import { db } from '../config/db';


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      matricNo: '',
      username: '',
      email: '',
      password: ''
    }
  }

  saveData = () =>{

    if(this.state.matricNo && this.state.username && this.state.email && this.state.password){
        this.addOrder();
    } 
    else{
       Alert.alert('Status','Empty Field(s)!');
    }

  }

  addOrder =  () => {
    db.ref('/user').child(this.state.matricNo).set({
      matricNo: this.state.matricNo,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
        // orderID: this.state.orderID,
        // totalPage: this.state.totalPage,
        // price: this.state.price,
        // name: this.state.name,
        // id: this.state.id,
        // phone: this.state.phone,
        // print: this.state.print,
        // output: this.state.output,
        // layout: this.state.layout,
        // orientation: this.state.orientation
    });
    
    //navigate to next page once data stored
    this.props.navigation.navigate('Login')
  }



  render() {
    return (
      //  <View style={styles.container}>
      //      <Text>REGISTER</Text>
      //      <View>
            //  <TextInput placeholder="Enter your matric number" onChangetext={(matricNo) => this.setState({matricNo})}>Matric No:</TextInput>
            //  <TextInput placeholder="Enter your username" onChangetext={(username) => this.setState({username})}>Username:</TextInput>
            //  <TextInput placeholder="Enter your email" onChangetext={(email) => this.setState({email})}>Email:</TextInput>
            //  <TextInput placeholder="Confirm password" onChangeText={(password) => this.setState({password})}>Password:</TextInput>
      //      </View>
      //      <View>
      //        <Button onPress={() => this.props.navigation.navigate('Home')} title="Sign Up"/>
      //      </View>
      //  </View>
       <Container>
         <Header>
          <Text>SIGNUP PAGE</Text>
         </Header>
         <Content>
           <Form>
            <TextInput placeholder="Enter your matric number" onChangetext={(matricNo) => this.setState({matricNo})}>Matric No:</TextInput>
            <TextInput placeholder="Enter your username" onChangetext={(username) => this.setState({username})}>Username:</TextInput>
            <TextInput placeholder="Enter your email" onChangetext={(email) => this.setState({email})}>Email:</TextInput>
            <TextInput placeholder="Confirm password" onChangeText={(password) => this.setState({password})}>Password:</TextInput>
           </Form>
           
         <Button light onPress={() => this.saveData()} title="Zass" />
         </Content>
       </Container>
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
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Container, Content, Header, Form, Button, Item, Label, Input } from 'native-base';
import { db } from '../config/db';


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      matricNo: null,
      username: null,
      email: null,
      password: null,
      errorMessage: null
    }
  }

  setMatricNo = (value) =>{
    this.setState({ matricNo: value});
  }

  setUsername = (value) =>{
    this.setState({ username: value});
  }

  setEmail = (value) =>{
    this.setState({ email: value});
  }

  setPassword = (value) =>{
    this.setState({ password: value});
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

  saveData = () =>{

    // Alert.alert(this.state.matricNo);
    // Alert.alert(this.state.username);
    // Alert.alert(this.state.email);
    // Alert.alert(this.state.password);

    
    if(this.state.matricNo && this.state.username && this.state.email && this.state.password ){
        this.addOrder();
    } 
    else{
       Alert.alert('Status','Empty Field(s)!');
    }

  }

  controllerSignUp=()=> {

    const {matricNo, username, email, password}=this.state
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then(user=>this.props.navigation.navigate('Login'))
    .catch(error=>this.setState({ errorMessage:error,message}))
    
    
    firebase.database().ref('/user').push(
    
    {
    matricNo,
    username,
    email,
    password
    
    }).then((data)=>{
    
    console.log('data',data)
    
    }).catch((error)=>{
    
    //error callback
    console.log('error',error)
    })
    
    
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
          <Text style={styles.header}>SIGNUP PAGE</Text>
         </Header>
         <Content>
           <Form>
             <Item floatingLabel>
               <Label>Matric No</Label>
               <Input onChangeText={this.setMatricNo} />
             </Item>
             <Item floatingLabel>
               <Label>Username</Label>
               <Input onChangeText={this.setUsername} />
             </Item>
             <Item floatingLabel>
               <Label>Email</Label>
               <Input onChangeText={this.setEmail} />
             </Item>
             <Item floatingLabel last>
               <Label>Password</Label>
               <Input onChangeText={this.setPassword} />
             </Item>
           </Form>
           <Button rounded info style={{marginLeft: 150, marginTop: 40}} onPress={() => this.saveData()}><Text style={{color: '#eff5ff', fontSize: 15, fontWeight: 'bold'}}>        Signup        </Text></Button>
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
      flexDirection: 'column',
      justifyContent: 'center'  
    },
    header:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#eff5ff',
      marginTop: 5
    }
  });
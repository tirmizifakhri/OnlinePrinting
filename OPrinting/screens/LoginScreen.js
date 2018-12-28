import React, { Component } from "react";
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { Container, Content, Form, H1, Icon } from "native-base";


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  // controllerLogin=()=> {

  //   const {email,password}=this.state
  //   firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email,password)
  //   .then(user=>this.props.navigation.navigate('Home'))
  //   .catch(error=>this.setState({ errorMessage:error,message}))
    
  // }


  render() {
    return (
      <Container style={styles.container}>
        <Content>
        <H1 style={styles.header}>ONLINE PRINTING</H1>
          <Form style={{marginTop:50}}>
            <View style={styles.inputContainer} >
              <Icon name='person' style={{width:30, height:30, marginLeft:15, justifyContent: 'center'}} />
              <TextInput style={styles.inputText} placeholder="Matric No" onChangeText={(matricNo) => this.setState({matricNo})}  />
              
            </View>
            <View style={styles.inputContainer}>
              <Icon name='key' style={{width:30, height:30, marginLeft:15, justifyContent: 'center'}} />
              <TextInput secureTextEntry={true} style={styles.inputText} placeholder="Password" onChangeText={(password) => this.setState({password})}  />
            </View>
          </Form>
          <View style={styles.button}>
            <Button onPress={() => this.props.navigation.navigate('Home')} title="Log In" />
          </View>
          <View style={styles.button}>
            <Button onPress={() => this.props.navigation.navigate('Signup')} title="Sign Up" />
          </View>
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
      // backgroundColor: '#006c70'
    },
    title: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    button: {
      flexDirection: 'column',
      marginTop: 10,
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250, height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
    },
    inputText: {
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1
    },
    header:{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 100
    }
  });
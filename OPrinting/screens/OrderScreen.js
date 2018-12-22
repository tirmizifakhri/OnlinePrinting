import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { db } from '../config/db';

export default class OrderScreen extends Component {


  //initialize variable needed here
  constructor() {
    super();
    this.state = {
      orderID: 0,
      totalPage: 0,
      price: 0
    };
  }

  //autogenerate ID number for each order made
  setOrderId = () =>{
    var RandomNumber = Math.floor(Math.random() * 9999999) + 1000000 ;
    this.setState({ orderID : RandomNumber});
    
  }

  //store total page and call setOrderId
  setTotalPage = (value) =>{
    this.setState({ totalPage: value});
    this.setOrderId();
  }

  //calculate price when button calculate clicked
  setPrice = () =>{
    this.setState({ price: (this.state.totalPage * 0.1)});
  }


  //validate data inserted before stored inside firebase
  saveData = () =>{

    if(this.state.orderID && this.state.totalPage && this.state.price){
        this.addOrder();
    } 
    else{
       Alert.alert('Status','Empty Field(s)!');
    }

  }

  //store data inside firebase
  addOrder =  () => {
    db.ref('/order').child(this.state.orderID).set({
        orderID: this.state.orderID,
        totalPage: this.state.totalPage,
        price: this.state.price
    });
    
    //navigate to next page once data stored
    this.props.navigation.navigate('Payment')
  }
  

  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text>Order Screen</Text>
        <Text>Total Page</Text>
              <TextInput onChangeText={this.setTotalPage} />
              <Text>Price :{this.state.price}</Text>
              <Button onPress={() => this.setPrice()} title="Calculate" />

        </View>
        
        <View style={styles.button}>
        <Button onPress={() => this.saveData()} title="Pay Now" />
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


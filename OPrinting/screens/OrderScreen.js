import React, { Component } from "react";
import { StyleSheet,TextInput, Alert } from "react-native";
//import axios from 'axios';
import { Footer, Header, Content, Container, Item, Picker, Form, Text, Button, Input} from "native-base";
import { db } from '../config/db';

export default class OrderScreen extends Component {

  //initialize variable needed here
  constructor() {
    super();
    this.state = {
      orderID: 0,
      totalPage: 0,
      price: 0,
      name: '',
      id: '',
      phone: '',
      selected: undefined
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
    this.setState({ price: (this.state.totalPage * 0.1.toFixed(2))});
  }

  setName = (value) =>{
    this.setState({ name: value});
    this.setName();
  }

  setId = (value) =>{
    this.setState({ id: value});
    this.setId();
  }

  setPhone = (value) =>{
    this.setState({ phone: value});
    this.setPhone();
  }


  //validate data inserted before stored inside firebase
  saveData = () =>{

    if(this.state.orderID && this.state.totalPage && this.state.name && 
      this.state.id && this.state.phone){
        this.addOrder();
    } 
    else{
      // Alert.alert('Status','Please fill up the empty field(s)!');
      Alert.alert(console.log(this.state.name));
    }

  }

  //store data inside firebase
  addOrder =  () => {
    db.ref('/order').child(this.state.orderID).set({
        orderID: this.state.orderID,
        totalPage: this.state.totalPage,
        price: this.state.price,
        name: this.state.name,
        id: this.state.id,
        phone: this.state.phone
    });

    //navigate to next page once data stored
    this.props.navigation.navigate('Payment');
  
  }
  

  render() {
    return (

<Container>
<Header>
  <Text style={styles.header}>ORDER</Text>
  </Header>
<Content>
  <Form>  
  <TextInput placeholder="Name:" onChangeText={(name) => this.setState({name})}  />
  <TextInput placeholder="Matric/Staff ID:" onChangeText={(id) => this.setState({id})}  />
  <TextInput placeholder="Phone no." onChangeText={(phone) => this.setState({phone})}  />

      <Item picker>
        <Text>Print :</Text>
        <Picker
          mode="dropdown"
          style={{ width: undefined }}
          placeholder="Choose"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.selected}
          onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
          <Picker.Item label="Color" value="key0" />
          <Picker.Item label="Black & White" value="key1" />
        </Picker>
        <Text>Output :</Text>
        <Picker
          mode="dropdown"
          style={{ width: undefined }}
          placeholder="Choose"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.selected}
          onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
          <Picker.Item label="1 sided" value="key0" />
          <Picker.Item label="2 sided" value="key1" />
        </Picker>
      </Item>

      <Item picker>
        <Text>Layout :</Text>
        <Picker
          mode="dropdown"
          style={{ width: undefined }}
          placeholder="Choose"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.selected}
          onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
          <Picker.Item label="Default" value="key0" />
          <Picker.Item label="2 page in 1" value="key1" />
          <Picker.Item label="Booklet" value="key2" />
          <Picker.Item label="Slides 4 in 1 left to right" value="key3" />
          <Picker.Item label="Slides 4 in 1 top to bottom" value="key4" />
          <Picker.Item label="Slides 6 in 1 left to right" value="key5" />
          <Picker.Item label="Slides 6 in 1 top to bottom" value="key6" />
        </Picker>
      </Item>

      <Item picker>
      <Text>Orientation</Text>
        <Picker
          mode="dropdown"
          style={{ width: undefined }}
          placeholder="Choose"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.selected}
          onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
          <Picker.Item label="Potrait" value="key0" />
          <Picker.Item label="Landscape" value="key1" />
        </Picker>
      </Item>

      
      <TextInput placeholder="Total Page" onChangeText={(totalPage) => this.setState({totalPage})}  />
              <Text>Price :{this.state.price}</Text>
    

      <Input style={{display: 'none'}}type="file" onChange ={this.fileSelectedHandler}
      ref={fileInput => this.fileInput = fileInput} />
      <Button onPress={() => this.fileInput}><Text>Pick File</Text></Button>
      <Button onPress={this.fileUploadHandler}><Text>Upload</Text></Button>
    </Form>
</Content>

<Footer>
<Button style={styles.button} margin={5} light onPress={() => this.setPrice()}>
<Text>Calculate</Text></Button>
  <Button style={styles.button} margin={5} light onPress={() => this.saveData()}>
  <Text>Proceed to Payment</Text></Button>
</Footer>
</Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'row',  
    justifyContent:'center',
    flex: 1,
  },
  header:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#eff5ff',
    marginTop: 5
  }

});



import React, { Component } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import { Footer, Header, Content, Container, Item, Picker, Form, Text, Button} from "native-base";
import { db } from '../config/db';

export default class OrderScreen extends Component {

  //initialize variable needed here
  constructor() {
    super();
    this.state = {
      orderID: 0, //auto generate id
      totalPage: 0,
      price: 0,
      // name: '',
      // id: '', //matric or staff id
      // phone: '',
      print: undefined,
      output: undefined,
      layout: undefined,
      orientation: undefined
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
  
  //input user name
  setName = (value) =>{
    this.setState({ name: value});
    this.setName();
  }
  
  //input user matric id/ staff id
  setId = (value) =>{
    this.setState({ id: value});
    this.setId();
  }
  
  //input user phone to contact when order is ready to be picked up
  setPhone = (value) =>{
    this.setState({ phone: value});
    this.setPhone();
  }

  //print color or black & white
  setPrint = (value) =>{
    this.setState({ print: value});
    this.setPrint();
  }

  //print 1 sided or 2 sided
  setOutput = (value) =>{
    this.setState({ output: value});
    this.setOutput();
  }

  //print arrangement in a page
  setLayout = (value) =>{
    this.setState({ layout: value});
    this.setLayout();
  }

  //print landscape or potrait
  setOrientation = (value) =>{
    this.setState({ orientation: value});
    this.setOrientation();
  }



  //validate data inserted before stored inside firebase
  saveData = () =>{

    if(this.state.orderID && this.state.totalPage && this.state.price /*&& this.state.name && this.state.id
       && this.state.phone */ && this.state.print && this.state.output && this.state.layout && this.state.orientation){
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
        // price: this.state.price,
        // name: this.state.name,
        // id: this.state.id,
        // phone: this.state.phone,
        print: this.state.print,
        output: this.state.output,
        layout: this.state.layout,
        orientation: this.state.orientation
    });
    
    //navigate to next page once data stored
    this.props.navigation.navigate('Payment',{orderID: this.state.orderID, price: this.state.price})
  }
  

  render() {
    return (
<Container>
  <Header>
  <Text style={styles.header}>ORDER</Text>
  </Header>
    <Content>     
      <Form>
      {/* <TextInput placeholder="Name:" onChangeText={(name) => this.setState({name})}  />
      <TextInput placeholder="Matric/Staff ID:" onChangeText={(id) => this.setState({id})}  />
      <TextInput placeholder="Phone no." onChangeText={(phone) => this.setState({phone})}  /> */}
     
      <Item picker>
      <Text>Print :</Text>
        <Picker
          mode="dropdown"
          style={{ width: undefined }}
          placeholder="Choose"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.print}
          onValueChange={(itemValue, itemIndex) => this.setState({print: itemValue})}>
          <Picker.Item label="Choose" value="--" />
          <Picker.Item label="Color" value="color" />
          <Picker.Item label="Black & White" value="bw" />
        </Picker>

      <Text>Output :</Text>
        <Picker
          mode="dropdown"
          style={{ width: undefined }}
          placeholder="Choose"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          selectedValue={this.state.output}
          onValueChange={(itemValue, itemIndex) => this.setState({output: itemValue})}>
          <Picker.Item label="Choose" value="--" />
          <Picker.Item label="1 sided" value="1 sided" />
          <Picker.Item label="2 sided" value="2 sided" />
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
          selectedValue={this.state.layout}
          onValueChange={(itemValue, itemIndex) => this.setState({layout: itemValue})}>
          <Picker.Item label="Choose" value="--" />
          <Picker.Item label="One page" value="one page" />
          <Picker.Item label="2 page in 1" value="2 in 1" />
          <Picker.Item label="Booklet" value="booklet" />
          <Picker.Item label="Slides 4 in 1 left to right" value="slide 4in1 horiz" />
          <Picker.Item label="Slides 4 in 1 top to bottom" value="slide 4in1 vert" />
          <Picker.Item label="Slides 6 in 1 left to right" value="slide 6in1 horiz" />
          <Picker.Item label="Slides 6 in 1 top to bottom" value="slide 6in1 vert" />
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
          selectedValue={this.state.orientation}
          onValueChange={(itemValue, itemIndex) => this.setState({orientation: itemValue})}>
          <Picker.Item label="Choose" value="--" />
          <Picker.Item label="Potrait" value="potrait" />
          <Picker.Item label="Landscape" value="landscape" />
        </Picker>
      </Item>
  
        <TextInput placeholder ="How many pages? Enter here" onChangeText={this.setTotalPage} />

        <Text>Price :{this.state.price.toFixed(2)}</Text>
          <Button onPress={() => this.setPrice()} title="Calculate" />
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


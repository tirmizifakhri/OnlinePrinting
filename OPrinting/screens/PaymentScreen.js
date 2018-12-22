import React, { Component } from "react";
import { View, StyleSheet} from "react-native";
import { Container,Header, Footer, Content, Button, Text, Form, Item, Picker } from "native-base";
import {OrderScreen} from "./OrderScreen";
import {db} from '../config/db';

let orderRef = db.ref('/order');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      orderID: null,
      totalPage: 0,
      price: 0,
      payMethod: undefined
    };
  }

  componentDidMount() {
    let query = orderRef.orderByChild("orderID");
      query.on('value', (snapshot) => {
      let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({order: firebaseData},()=>{
              this.state.order.map((element) => {
                this.setState({
                  orderID: element.orderID,
                  totalPage: element.totalPage,
                  price: element.price
                });
              });
            });
          }
     });
  }

  render() {
    return (

     <Container>
       <Header>
        <Text style={styles.header}>PAYMENT</Text>
       </Header>
       <Content justifyContent={'center'}>
       <Form>
            <Text margin={20} fontSize={25} alignItems={'center'}>Total Price: RM{this.state.price}</Text>
            <Item picker>
              <Text>Payment Method</Text>
              <Picker
                mode="dropdown"
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.payMethod}
                onValueChange={(itemValue, itemIndex) => this.setState({payMethod: itemValue})}
              >
                <Picker.Item label="---" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </Form>
       </Content>
       <Footer>
              <Button style={styles.button} margin={5} width={250} light onPress={() => this.props.navigation.navigate('OrderStatus')}><Text fontWeight={'bold'}>Pay</Text></Button>

       </Footer>
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
      flexDirection: 'row',  
      justifyContent:'center',
    },
    header:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#eff5ff',
      marginTop: 5
    }




  });

  
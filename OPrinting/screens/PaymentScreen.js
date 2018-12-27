import React, { Component } from "react";
import { Alert, StyleSheet} from "react-native";
import { Container, Icon, Header, Footer, Content, Button, Text, Form, Item, Picker } from "native-base";
import {db} from '../config/db';

let orderRef = db.ref('/order');


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // order: [],
      // orderID: null,
      // totalPage: 0,
      // price: 0,
      payMethod: undefined
    };
  }
  

  

  // componentDidMount() {
  //   let query = orderRef.orderByChild("orderID");
  //     query.on('value', (snapshot) => {
  //     let data = snapshot.val();
  //         if(data){
  //           let firebaseData = Object.values(data);
  //           this.setState({order: firebaseData},()=>{
  //             this.state.order.map((element) => {
  //               this.setState({
  //                 orderID: element.orderID,
  //                 totalPage: element.totalPage,
  //                 price: element.price
  //               });
  //             });
  //           });
  //         }
  //    });
  // }

  render() {
    const {navigation} = this.props;
    const itemId = navigation.getParam('orderID', 'ORDER');
    const price = navigation.getParam('price', 'price');

    return (

     <Container>
       <Header>
        <Text style={styles.header}>PAYMENT</Text>
       </Header>
       <Content justifyContent={'center'}>
       <Form>
            <Text>OrderID: {itemId}</Text>
            <Text style={styles.h1}>TOTAL PRICE: RM{price}</Text>
            
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
              <Button margin={5}  light onPress={() => this.props.navigation.navigate('OrderStatus')}>
              <Icon name="logo-usd"/>
              <Text fontWeight={'bold'}>Pay</Text>
              </Button>

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
    },
    h1:{
      textAlign: 'left',
      fontSize: 40,
      fontWeight: 'bold',
      color: '#f44242',
      margin: 15
    }




  });

  
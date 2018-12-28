import React, { Component } from "react";
import { StyleSheet,  View, Image,  ScrollView, TouchableOpacity, ListView } from "react-native";
import { Container,Header, Icon, Footer, Content, Button, Text, Form, Item, Picker } from "native-base";

import firebase from 'react-native-firebase';

// const config={

//   apiKey: "AIzaSyBrdHREz5n1-zNSV1IwKLoQeyaH7ZJrRqY",
//     authDomain: "mizi-test.firebaseapp.com",
//     databaseURL: "https://mizi-test.firebaseio.com",
//     projectId: "mizi-test",
//     storageBucket: "mizi-test.appspot.com",
//     messagingSenderId: "472119117142"
//   };
//   firebase.initializeApp(config);

export default class App extends Component {
  
  constructor(props){
    super(props);
  database = firebase.database();
  items=[];
  this.state={
  
    orderID: 0, //auto generate id
    totalPage: 0,
    price: 0,
    // name: '',
    // id: '', //matric or staff id
    // phone: '',
    print: undefined,
    output: undefined,
    layout: undefined,
    orientation: undefined,
  
//dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
  
  
  };
  }

  // componentWillMount(){

  //   database.ref('/order').on('value', (snap)=>{
  //   items=[];
  //   snap.forEach((data)=>{
  //        items.push({
  //            key:data.key,
  //            data:data.val(),
    
    
  //        });

  //       });
  //       this.setState({dataSource:this.state.dataSource.cloneWithRows(items)});
        
        
        
        
  //       });
  //       }
        
        
        
        // renderRow(data){
        // return(
        
        // <View>
        
        //      <Text>orderID:{data.data.orderID}</Text>
        //      <Text>totalPage:{data.data.totalPage}</Text>
        //      <Text>price:{data.data.price}</Text>
        //       <Text>print:{data.data.print}</Text>
        //       <Text>output:{data.data.output}</Text>
        //       <Text>layout:{data.data.layout}</Text>
        //       <Text>orientation:{data.data.orientation}</Text>
        //       <View style={{height:2, backgroundColor:'#006c70'}}/>
        // </View>
        // );
        
        
        
        
        
        // }
  
  render() {
    return (
      <ScrollView>
      <Container>
      {/* <Content justifyContent={'center'}>

      <View style={{flex: 1}}>
            <ListView 
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
            />

            </View>

      </Content>
      <Footer>
             <Button style={styles.button} margin={5} light onPress={() => this.props.navigation.navigate('Home')}>
             <Icon name="home"/>
             <Text fontWeight={'bold'}>HOME</Text>
             </Button>

      </Footer> */}
    </Container>
    </ScrollView>
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
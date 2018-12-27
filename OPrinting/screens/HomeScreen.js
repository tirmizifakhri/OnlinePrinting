// import React, { Component } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";


// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//         <Text>Home Screen</Text>
//         </View>
//         <View style={styles.button}>
//         <Button onPress={() => this.props.navigation.navigate('Order')} title="Order" />
//         <Button onPress={() => this.props.navigation.navigate('OrderStatus')} title="OrderStatus" />
//         </View>
//         <View style={styles.button}>
//         <Button onPress={() => this.props.navigation.navigate('Login')} title="Sign Out" />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#F5FCFF',
//       textAlignVertical: 'top',
//     },
//     button: {
//       flexDirection: 'row'  
//     }
//   });

import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Container, Header, Content, Form, Item, Input, Label } from "native-base";


export default class App extends Component {
  render() {
    return (
      <ScrollView>
      <Container>
        <Header>
          <Text style={styles.header}>HOME SCREEN</Text>
        </Header>
        <Content>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/shopping-basket/color/50/ffffff'}}/>
          <Text style={styles.info}>Order</Text>
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Order')} title="Order" />
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/notification/dusk/50/ffffff'}}/>
          <Text style={styles.info}>Order Status</Text>
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('OrderStatus')} title="OrderStatus" />
        </View>

        <View style={styles.menuBox}>
          <Image style={styles.icon} source={{uri: 'https://png.icons8.com/user-menu-male/color/50/ffffff'}}/>
          <Text style={styles.info}>Sign Out</Text>
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Login')} title="Sign Out" />
        </View>
        </Content>
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
      flexDirection: 'column'  
    },
    menuBox:{
      backgroundColor: "#DCDCDC",
      width:400,
      height:100,
      alignItems: 'center',
      justifyContent: 'center',
      margin:10
    },
    icon: {
      width:50,
      height:50,
    },
    info:{
      fontSize:20,
      color: "#696969",
    },
    header:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#eff5ff',
      marginTop: 10
    }
  });

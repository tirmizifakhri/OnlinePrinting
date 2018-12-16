import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
        <Text>Home Screen</Text>
        </View>

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
    },
    menuBox:{
      backgroundColor: "#DCDCDC",
      width:100,
      height:100,
      alignItems: 'center',
      justifyContent: 'center',
      margin:12
    },
    icon: {
      width:60,
      height:60,
    },
    info:{
      fontSize:22,
      color: "#696969",
    }
  });
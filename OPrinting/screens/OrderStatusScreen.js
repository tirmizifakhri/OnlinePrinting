import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container,Header, Icon, Footer, Content, Button, Text, Form, Item, Picker } from "native-base";



export default class App extends Component {
  render() {
    return (
      <Container>
      <Content justifyContent={'center'}>

      </Content>
      <Footer>
             <Button style={styles.button} margin={5} light onPress={() => this.props.navigation.navigate('Home')}>
             <Icon name="home"/>
             <Text fontWeight={'bold'}>HOME</Text>
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
      flexDirection: 'row'  
    }
  });
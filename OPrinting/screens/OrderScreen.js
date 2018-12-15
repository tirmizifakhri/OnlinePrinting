import React, { Component } from "react";
import { StyleSheet, TextInput} from "react-native";
import { Footer, Header, Content, Container, Item, Picker, Form, Text, Button} from "native-base";

export default class OrderScreen extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      id: '',
      phone: '',
      selected: undefined
    };
  }


  render() {
    const {navigate} = this.props.navigation;
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
          </Form>
      </Content>

      <Footer>
        <Button style={styles.button} margin={5} width={250} light onPress={() => navigate('Payment')}>
        <Text>Proceed to Payment</Text></Button>
      </Footer>
    </Container>

    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F5FCFF',
    textAlignVertical: 'top',
  },
  button: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    fontSize: 14
  },
  orderForm:{
    flexDirection: 'column'
},
header: {
  fontSize: 30,
      fontWeight: 'bold',
      color: '#eff5ff',
      marginTop: 5
},
textInput: {
    alignSelf: 'stretch',
    height: 20,
    marginBottom: 10,
    color: '#fff',
    borderBottomWidth: 1
}
});

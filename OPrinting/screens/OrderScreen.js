import React, { Component } from 'react';
import {StyleSheet} from "react-native";
import { render } from 'react-dom';
import FormContainer from 'containers/FormContainer';
import './App.css';



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class OrderScreen extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Sample Form Container </h3>
        <FormContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

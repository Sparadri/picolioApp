console.log("Questions component to be loaded");

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image,
  ListView,
  Text,
  View
} from 'react-native';
import { Button, Card } from 'react-native-material-design';
import NavigationBar from 'react-native-navbar';

var QUESTIONS = [
  {
    topic: "pairing",
    question: "What meal will you eat?",
    answers: ["MEAT", "FISH", "I don't know!"]
  },
  {
    topic: "type",
    question: "What type of wine to you want?",
    answers: ["WHITE WINE", "RED WINE", "ROSE WINE"]
  },
  {
    topic: "price",
    question: "What's your maximum price?",
    answers: ["LESS THAN 10e", "LESS THAN 20e", "OVER 20e"]
  }
]

import Question from './question';

module.exports = React.createClass({

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      qNumber: 0,
      answers: []
    };
  },

  componentDidMount: function() {
   // navigator.geolocation.getCurrentPosition(
   //    (position) => {
   //      var initialPosition = JSON.stringify(position);
   //      this.setState({initialPosition});
   //    },
   //    (error) => alert(error.message),
   //    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
   //  );
  },

  onButtonPress: function(topic, answer) {
    this.state.answers[topic] = answer;
    console.log(this.state.answers);

    if (this.state.qNumber < QUESTIONS.length - 1) {
      var qNumber = this.state.qNumber + 1;
      this.setState({qNumber: qNumber});
      this.props.navigator.push({
        name: 'Question',
        passProps: {
          content: QUESTIONS[this.state.qNumber + 1],
          onButtonPress: this.onButtonPress
        }
      });
    } else {
      console.log('STOOOOOOOOOOOOOOOOP');
      this._APIcall();
    };
  },

  _APIcall: function() {

    var pairing = this.state.answers["pairing"];
    var price   = this.state.answers["price"];
    var color   = this.state.answers["color"];
    var latitude = 23;
    var longitude = 2;
    // var URL = "https://picolio.scalingo.io/api/v1/wines?latitude="+latitude+"&longitude="+longitude+"&color="+color+"&price="+price+"&paring="+pairing;
    var URL = "https://picolio.scalingo.io/api/v1/wines?latitude=48.851122&longitude=2.376058"
    this.props.navigator.push({
      name: 'Carousel',
      passProps: {
        url: URL
      }
    });
  },

  render() {
    return (
      <View style={{ flex: 1, }}>
          <Question
            navigator={this.props.navigator}
            content={QUESTIONS[this.state.qNumber]}
            onButtonPress={this.onButtonPress}/>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

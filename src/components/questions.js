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

var QUESTIONS = [
  {
    topic: "meal",
    question: "What meal will you eat?",
    answers: ["Meat", "Fish", "I don't know!"]
  },
  {
    topic: "type",
    question: "What's your preference?",
    answers: ["White wine", "Red wine", "Rosé"]
  },
  {
    topic: "price",
    question: "What's your maximum price?",
    answers: ["Less than 10 euros", "Less than 20 euros", "Over 20 euros"]
  }
]

import Question from './question';

module.exports = React.createClass({

  getInitialState: function() {
    this._getCurrentPosition();
    return {
      initialPosition: 'unknown',
      qNumber: 0,
      answers: []
    };
  },

  componentDidMount: function() {
    // console.log("state is ");
    // console.log(this.state);
    // this.props.navigator.push({
    //   name: 'Question',
    //   passProps: {
    //     content: QUESTIONS[0],
    //     onButtonPress: this.onButtonPress
    //   }
    // });
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
      this._fetchData();
    };
  },

  _getCurrentPosition: function() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
        console.log(this.state.initialPosition)
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );


  },

  _fetchData: function() {

    var URL = "https://picolio.scalingo.io/api/v1/wines?latitude="+23+"&longitude=2.376058&color=white&price=less-10&paring=";

    fetch(URL)
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText);
      })
      .catch((error) => {
        console.warn(error);
    });

  },

  render() {
    return (
      <View style={styles.container}>
          <Question
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

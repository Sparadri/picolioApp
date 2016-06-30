console.log("Home component to be loaded");

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import { Button, Card } from 'react-native-material-design';

var QUESTIONS = {
  question1: {
    question: "What meal will you eat?",
    answers: ["Meat", "Fish", "I don't know!"]
  },
  question2: {
    question: "What's your preference?",
    answers: ["Meat", "Fish", "I don't know!"]
  }
}

module.exports = React.createClass({


   onStartPress: function() {
    this.props.navigator.push({
      name: 'Question',
      passProps: {
        content: QUESTIONS.question1
      }
    });
  },

  render() {
    console.log("Home component is rendered");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
          text="Take the questionaire"
          raised={true}
          onPress={()=> this.onStartPress()} />
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

console.log("Home component to be loaded");

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import Button from 'apsl-react-native-button';

module.exports = React.createClass({

  getInitialState: function() {
    return {
      TBD: null,
    };
  },

  // redirect to questions, which will take care of sliding & validating the questions
   onStartPress: function() {
    this.props.navigator.push({
      name: 'Questions',
    });
  },

  render() {
    console.log("Home component is rendered");
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Welcome to Picolio!
        </Text>
        <Text style={styles.subtitle}>
          The easiest way to find the best wine near your ;)
        </Text>
        <Button
          style={styles.buttonWrapper}
          textStyle={styles.buttonText}
          onPress={()=> this.onStartPress()}>
          TAKE THE QUESTIONAIRE
        </Button>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '700',
    fontSize: 14,
    color: '#2980b9'
  },
  buttonWrapper: {
    backgroundColor: '#ecf0f1',
    borderColor: '#ecf0f1',
    width: 200,
    alignSelf: 'center',
    marginTop: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
  },
  header: {
    fontSize: 25,
    color: '#ecf0f1',
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    color: '#ecf0f1',
    marginTop: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#e74c3c',
  }
});

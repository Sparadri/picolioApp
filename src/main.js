console.log("Main component to be loaded");

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './components/home';

var ROUTES = {
  home: "Home"
};

module.exports = React.createClass({
  componentWillMount: function() {
    console.log("component will mount > log in into the API")
  },
  componentDidMount: function() {
    console.log("component did mount > load the data from the API")
  },
  renderScene(route, navigator) {
     if(route.name == ROUTES.home) {
       return <Home navigator={navigator} {...route.passProps} />
     }
     // if(route.name == 'Main') {
     //   return <Main navigator={navigator} {...route.passProps} />
     // }
  },
  render() {
    return (
      <Navigator
          configureScene={ this.configureScene }
          style={{ flex:1 }}
          initialRoute={{ name: "Home" }}
          renderScene={ this.renderScene } />
    );
  }
})


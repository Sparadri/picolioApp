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
import Question from './components/question';
import Questions from './components/questions';
import Carousel from './components/carousel';

var ROUTES = {
  home: "Home",
  questions: "Questions",
  question: "Question",
  carousel: "Carousel"
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
     if(route.name == ROUTES.questions) {
       return <Questions navigator={navigator} {...route.passProps} />
     }
     if(route.name == ROUTES.question) {
       return <Question navigator={navigator} {...route.passProps} />
     }
     if(route.name == ROUTES.carousel) {
       return <Carousel navigator={navigator} {...route.passProps} />
     }
  },
  render() {
    return (
      <Navigator
          configureScene={ this.configureScene }
          style={{ flex:1 }}
          initialRoute={{ name: "Home" }}
          configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
          renderScene={ this.renderScene } />
    );
  }
})


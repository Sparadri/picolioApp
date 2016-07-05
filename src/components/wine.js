'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  ListView,
  Text,
  View
} from 'react-native';

import { Button, Card } from 'react-native-material-design';
import Swiper from './swiper';
import NavigationBar from 'react-native-navbar';

var API_URL = "http://picolio.scalingo.io/api/v1"

module.exports = React.createClass({

  getInitialState: function() {
    console.log("wine initial state");
    return {
      wineId: this.props.wine.id,
      wine: null,
      isLoading: true
    };
  },

  componentDidMount: function() {
    // var wine_id = this.props.wine.id;
    // var url = API_URL + "/wines/" + 4 + "&store_id=" + 300;
    // var yurl = "http://picolio.scalingo.io/api/v1/wines/4?&store_id=300"
    var wineId = this.state.wineId;
    fetch("https://picolio.scalingo.io/api/v1/wines/"+wineId+"?latitude=48.851122&longitude=2.376058&store_id=300")
    .then((response) => response.json())
    .then((responseText) => {
      this.setState({wine: responseText.wine, isLoading: false})
      console.log("new state below");
      console.log(this.state);
      console.log(this.state.wine.brand_name);
    })
    .catch((error) => {
      console.warn(error);
    });
  },

  _renderWine: function() {
    if (this.state.wine) {
      return (
        <Text>Adrien</Text>
      )
    }
  },

  render() {
    const titleConfig = {
      title: 'Wine Show',
    };

    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };


    return (
      <View style={{ flex: 1, }}>
          <NavigationBar
            title={titleConfig}
            leftButton={leftButtonConfig} />
        <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.isLoading}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
        {this._renderWine()}
      </View>
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


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


module.exports = React.createClass({

  getInitialState: function() {
    console.log("Carousel initialised");
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: null,
      wines: null,
      isLoading: true
    };
  },

  componentDidMount: function() {
    fetch(this.props.url)
      .then((response) => response.text())
      .then((responseText) => {
        this.setState({
          isLoading: false,
          wines: responseText
        });
        this._buildListView();
      })
      .catch((error) => {
        console.warn(error);
    });
  },

  _buildListView: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({dataSource: ds.cloneWithRows(this.state.wines),})
  },

  _renderAnswerRow: function(wine) {
    return (
      <Button
        raised={true}
        onPress={()=> this.onButtonPress(this.props.content.topic, answer)}
        text={wine} />
      )
  },

  _renderListView: function() {
    if (this.state.dataSource) {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(wine) => this._renderAnswerRow(wine)}
        />
      )
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.isLoading}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
        {this._renderListView()}
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

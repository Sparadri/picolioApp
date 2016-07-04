console.log("Question component to be loaded");

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


module.exports = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this.props.content.answers),
    };
  },

  onButtonPress: function(topic, answer) {
    console.log(answer+"  -  "+topic);
    this.props.onButtonPress(topic, answer);
  },

  _renderAnswerRow: function(answer) {
    return (
      <Button
        raised={true}
        onPress={()=> this.onButtonPress(this.props.content.topic, answer)}
        text={answer} />
      )
  },

  render() {
    return (
      <View style={styles.container}>
        <Card>
            <Card.Media
                image={<Image source={{uri: 'https://assets.entrepreneur.com/content/16x9/822/20150909205144-red-wine-classy-evening-dinner.jpeg'}} />}
                overlay={true}
            />
            <Card.Body>
                <Text>Some text to go in the body.</Text>
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(answer) => this._renderAnswerRow(answer)}
                />
            </Card.Body>
        </Card>
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

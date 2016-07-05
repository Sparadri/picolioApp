console.log("Question component to be loaded");

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image,
  ListView,
  Text,
  Dimensions,
  View
} from 'react-native';
import { Button, Card } from 'react-native-material-design';
import NavigationBar from 'react-native-navbar';

var width = Dimensions.get('window').width;

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
    const rightButtonConfig = {
      title: 'Skip',
      handler: () => this.onButtonPress(this.props.content.topic, ""),
    };

    const titleConfig = {
      title: 'Questionaire',
    };

    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };


    return (
      <View style={{ flex: 1, }}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={leftButtonConfig} />
        <View style={styles.container}>

          <Card style={{width: width * 0.8}}>
              <Card.Media
                  image={<Image source={{uri: 'https://assets.entrepreneur.com/content/16x9/822/20150909205144-red-wine-classy-evening-dinner.jpeg'}} />}
                  overlay={true}
              />
              <Card.Body>
                  <Text style={{alignSelf:'center', marginBottom: 50, color:'#2c3e50'}}>{this.props.content.question}</Text>
                  <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(answer) => this._renderAnswerRow(answer)}
                  />
              </Card.Body>
          </Card>
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

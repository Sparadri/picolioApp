import Swiper from 'react-native-swiper'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


module.exports = React.createClass({

  getInitialState: function() {
    console.log("Swiper initialised");
    return {
      wines: this.props.wines
    };
  },

  componentDidMount() {
  },

  _onPressButton: function(wine) {
    console.log("--------------------");
    console.log(wine);
    console.log(this.props);
    this.props.navigator.push({
      name: 'Wine',
      passProps: {
        wine: wine
      }
    });
  },

  render() {
    return (
      <Swiper
        showsButtons={false}
        dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        paginationStyle={{bottom: 70,}}>
        {this.state.wines.map((wine, key) => {
          return (
              <View key={key} style={styles.item}>
                <Image
                  source={{uri: wine.photo_url}}
                  style={{width: 400, height: 400}} />
                <TouchableHighlight
                  style={styles.item}
                  key={key}
                  onPress={()=>this._onPressButton(wine)}>
                    <Text style={styles.text}>{wine.name}</Text>
                </TouchableHighlight>
              </View>
          )
        })}
      </Swiper>
    )
  }
})


var styles = StyleSheet.create({
  wrapper: {
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Slide from './components/Slide';
import Content from './ios/content';
export default class tutorial extends Component {

  constructor(){
    super();
    this.State={
      oldSlide: {
        text: "",
        image: ""
      },
      currentSlide: {
        text: "",
        image: ""
      },
      nextSlide: {
        text: "",
        image: ""
      }
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(old, current, next){
    setState({
      oldSlide: old,
      currentSlide: current,
      nextSlide: next
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Slide updateState={this.updateState} slide={this.state}/>
      </View>
    );
  }
}

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

AppRegistry.registerComponent('tutorial', () => tutorial);

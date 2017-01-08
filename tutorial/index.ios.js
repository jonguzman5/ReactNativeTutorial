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

export default class tutorial extends Component {

  constructor(){
    super();

  }

  render() {
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
slidediv: {
  backgroundColor: lightblue,
  opacity: 0.5,
}
button: {
  border: 4px solid green,
  borderRadius: 1em,
  backgroundColor: lightgreen,
  width: 3em,
}
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: url('https://s-media-cache-ak0.pinimg.com/736x/25/17/12/251712967ce3b0436e43123e0c6785cf.jpg'),
    backgroundSize: cover,
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

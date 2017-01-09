import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

function Slide(props){

return(
<View>
  <Image
    source={{uri: props.slide.image}}
    style={{width: 50, height: 50, alignSelf: 'center'}}
  />
  <Text className="text">
    {props.slide.text}
  </Text>
  <Button
    onPress={() => {props.prevState()}}
    title="<"
    style={styles.previous}
  />
  <Button
    onPress={() => {props.nextState()}}
    title=">"
    style={styles.next}
   />
</View>
  )
}
const styles = StyleSheet.create({
  previous: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  next: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});


export default Slide;

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
<Text className="text">
{props.slide.text}
</Text>
  <Image
          style={{width: 50, height: 50}}
          source={{uri: props.slide.image}}

        />
           <Button
          onPress={() => {props.prevState()}}
          title="Previous Slide"
        />
         <Button
          onPress={() => {props.nextState()}}
          title="Next Slide"
        />

</View>

  )

}

export default Slide;
